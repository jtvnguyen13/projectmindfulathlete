import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">🧠 Mindful Athlete</h3>
            <p className="text-sm opacity-80">
              Empowering youth athletes with science-based insights on stress, recovery, and mindset.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="/science" className="opacity-80 hover:opacity-100 transition-opacity">
                  Science
                </Link>
              </li>
              <li>
                <Link href="/tools" className="opacity-80 hover:opacity-100 transition-opacity">
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="opacity-80 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:hello@mindfulathlete.com" className="opacity-80 hover:opacity-100 transition-opacity">
                  Email Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white opacity-20 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="opacity-80">© 2024 Project Mindful Athlete. All rights reserved.</p>
          <p className="opacity-80 mt-4 md:mt-0">
            Built with ❤️ by{' '}
            <a href="#" className="font-semibold hover:opacity-100">
              Jasmine & Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
