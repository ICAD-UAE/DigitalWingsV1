'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes } from 'react';

const editTextClasses = cva(
  'border border-border-primary rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-input-background text-text-primary',
        secondary: 'bg-background-main text-text-primary border-border-primary',
        outlined: 'bg-transparent text-text-primary border-border-primary',
      },
      size: {
        small: 'text-sm px-3 py-2',
        medium: 'text-base px-4 py-3',
        large: 'text-lg px-5 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

interface EditTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof editTextClasses> {
  // Required parameters with defaults
  fill_background_color?: string;
  
  // Optional parameters
  layout_width?: string;
  padding?: string;
  position?: string;
  
  // Additional input props
  label?: string;
  error?: string;
}

const EditText = ({
  // Required parameters with defaults
  fill_background_color = "bg-input-background",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Additional props
  label,
  error,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  placeholder,
  type = 'text',
  ...props
}: EditTextProps) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build Tailwind classes for styling
  const styleClasses = [
    fill_background_color,
    error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={twMerge(
          editTextClasses({ variant, size }),
          styleClasses,
          optionalClasses,
          className
        )}
        aria-disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default EditText
