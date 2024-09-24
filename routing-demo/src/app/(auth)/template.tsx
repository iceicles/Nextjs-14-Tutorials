'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';
import { useState } from 'react';

/**
 * Templates are similar to layouts in taht they wrap each child layout or page
 * But, with templates, wh en a user navigates between routes that share a template, a new instance
 * of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized
 *
 * A template can be defined by exporting a default React component from a template.js or tempolate.tsx file
 *
 * Similar to layouts, templates also should accept a children prop which will render the nested segments
 * in the route
 *
 */

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [input, setInput] = useState('');

  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
