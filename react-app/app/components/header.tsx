import React from 'react';
import { Link } from 'react-router/internal/react-server-client';

export function Header() {
  return (
    <div>
     <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/90 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-tight text-pink-600" >
                Hi, Welcome to My React App!
            </Link>
          </div>
        </header>
      </div>
    );
}

