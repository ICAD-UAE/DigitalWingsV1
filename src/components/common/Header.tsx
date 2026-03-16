'use client';
import { useState } from 'react';
 import Link from'next/link';
 import Button from'../ui/button';

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Packages', href: '#' },
  { label: 'Tours', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Contact', href: '#' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-primary-background">
      {/* Top Contact Bar */}
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 lg:px-[18px] py-2 gap-2 sm:gap-0">
          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <Link href="#" className="block" aria-label="Instagram">
              <img 
                src="/images/img_mdi_instagram.svg" 
                alt="Instagram" 
                className="w-[24px] h-[24px] transition-opacity hover:opacity-80"
              />
            </Link>
            <Link href="#" className="block ml-3 sm:ml-4" aria-label="Twitter">
              <img 
                src="/images/img_circum_twitter.svg" 
                alt="Twitter" 
                className="w-[24px] h-[24px] transition-opacity hover:opacity-80"
              />
            </Link>
            <Link href="#" className="block ml-2" aria-label="Facebook">
              <img 
                src="/images/img_iconoir_facebook.svg" 
                alt="Facebook" 
                className="w-[24px] h-[24px] transition-opacity hover:opacity-80"
              />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
            <div className="flex items-center">
              <img 
                src="/images/img_material_symbols_call.svg" 
                alt="Phone" 
                className="w-[18px] h-[18px]"
              />
              <span className="text-sm sm:text-base font-light leading-md text-header-text ml-1.5">
                +1 334 445 623
              </span>
            </div>
            <div className="flex items-center">
              <img 
                src="/images/img_ic_outline_email.svg" 
                alt="Email" 
                className="w-[18px] h-[18px]"
              />
              <span className="text-sm sm:text-base font-light leading-md text-header-text ml-1.5">
                contact@digitalwings.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full max-w-[1440px] mx-auto">
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-[18px] py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-header-text">DigitalWings</h1>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg 
              className="w-6 h-6 text-header-text" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                className="text-lg font-normal leading-2xl text-header-text hover:text-primary-light transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} px-4 sm:px-6 pb-4`}>
          <div className="flex flex-col gap-4 bg-primary-light rounded-lg p-4">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                className="text-lg font-normal text-header-text hover:text-background-main transition-colors duration-200 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
