import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-dark-blue">
          🧠 Mindful Athlete
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-text-dark hover:text-dark-blue transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-text-dark hover:text-dark-blue transition-colors">
            About
          </Link>
          <Link href="/science" className="text-text-dark hover:text-dark-blue transition-colors">
            Science
          </Link>
          <Link href="/tools" className="text-text-dark hover:text-dark-blue transition-colors">
            Tools
          </Link>
          <Link href="/contact" className="bg-dark-blue text-white px-6 py-2 rounded-lg hover:bg-primary-blue transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-dark-blue"></span>
          <span className="w-6 h-0.5 bg-dark-blue"></span>
          <span className="w-6 h-0.5 bg-dark-blue"></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-light-gray border-t border-border px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="text-text-dark hover:text-dark-blue transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-text-dark hover:text-dark-blue transition-colors">
            About
          </Link>
          <Link href="/science" className="text-text-dark hover:text-dark-blue transition-colors">
            Science
          </Link>
          <Link href="/tools" className="text-text-dark hover:text-dark-blue transition-colors">
            Tools
          </Link>
          <Link href="/contact" className="bg-dark-blue text-white px-6 py-2 rounded-lg hover:bg-primary-blue transition-colors text-center">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
