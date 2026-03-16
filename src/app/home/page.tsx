import { Metadata } from 'next';
import HomePage from '../HomePage';

export const metadata: Metadata = {
  title: 'DigitalWings | Home',
  description: 'Discover amazing travel destinations with DigitalWings.',
  openGraph: {
    title: 'DigitalWings | Home',
    description: 'Discover amazing travel destinations with DigitalWings.',
  },
};

export default function Home() {
  return <HomePage />;
}
