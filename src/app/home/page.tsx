import { Metadata } from 'next';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
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
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  )
}