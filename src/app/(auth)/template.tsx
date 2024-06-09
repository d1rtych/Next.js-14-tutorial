'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
]

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [input, setInput] = useState('');

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.href}
            className={`${isActive ? 'font-bold' : ''} text-blue-500 mr-2`}
          >
            {link.name}
          </Link>
        )
      })}
      {children}
    </div>
  );
}
