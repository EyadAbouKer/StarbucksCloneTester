import { useState } from 'react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6">
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 100 8 4 4 0 000-8z" fill="#006241"/>
            </svg>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className={`uppercase font-bold text-sm tracking-wide hover:text-primary transition ${location === '/' ? 'border-b-2 border-[#006241]' : ''}`}>
              Menu
            </Link>
            <Link href="/rewards" className={`uppercase font-bold text-sm tracking-wide hover:text-primary transition ${location === '/rewards' ? 'border-b-2 border-[#006241]' : ''}`}>
              Rewards
            </Link>
            <Link href="/gift" className={`uppercase font-bold text-sm tracking-wide hover:text-primary transition ${location === '/gift' ? 'border-b-2 border-[#006241]' : ''}`}>
              Gift Cards
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center space-x-2 hover:text-primary transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Find a store</span>
          </button>
          <button className="hidden md:block btn-outline">Sign in</button>
          <button className="btn-dark">Join now</button>
          <button onClick={toggleMenu} className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-md">
          <nav className="flex flex-col space-y-3 py-4">
            <Link href="/" className="font-medium text-lg">Menu</Link>
            <Link href="/rewards" className="font-medium text-lg">Rewards</Link>
            <Link href="/gift" className="font-medium text-lg">Gift Cards</Link>
            <hr className="my-2" />
            <div className="flex items-center space-x-2 hover:text-primary transition cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Find a store</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
