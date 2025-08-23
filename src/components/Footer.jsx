"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (!pathname.includes("dashboard")) {
    return (
      <footer className="bg-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Foodies</h2>
            <p className="text-[var(--color-text-secondary)]">
              Foodies is your ultimate destination for delicious recipes and
              cooking inspiration. Explore, cook, and enjoy tasty meals!
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[var(--color-secondary)] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[var(--color-secondary)] transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-[var(--color-secondary)] transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[var(--color-secondary)] transition"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="text-[var(--color-text-secondary)] mb-2">
              Email: info@foodies.com
            </p>
            <p className="text-[var(--color-text-secondary)] mb-2">
              Phone: +880 1234 567890
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="hover:text-[var(--color-secondary)] transition"
              >
                FB
              </a>
              <a
                href="#"
                className="hover:text-[var(--color-secondary)] transition"
              >
                IG
              </a>
              <a
                href="#"
                className="hover:text-[var(--color-secondary)] transition"
              >
                TW
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-secondary)] mt-8 py-4 text-center text-[var(--color-text-secondary)]">
          &copy; {new Date().getFullYear()} Foodies. All rights reserved.
        </div>
      </footer>
    );
  }
  else{
    return <></>
  }
}
