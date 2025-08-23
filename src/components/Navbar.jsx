"use client";
import { signOut, useSession } from "next-auth/react";
// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const { data: session, status,user } = useSession();
  console.log(session);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  if (!pathname.includes("dashboard")) {
    return (
      <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-0">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Link href="/">
                <span className="text-2xl font-bold hover:text-accent transition">
                  Foodies
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition ${
                    pathname === link.href
                      ? "text-accent underline underline-offset-4"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {status == "authenticated" ? (
                <>
                 {/* <li>
                  <Image src={user.image} width={50} height={50} alt="image" ></Image>
                 </li> */}
                  <button
                    onClick={() => signOut()}
                    className="px-5 py-2 border-2 border-white rounded-full font-semibold text-white hover:bg-accent hover:border-accent transition"
                  >
                    Singout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-5 py-2 border-2 border-white rounded-full font-semibold text-white hover:bg-accent hover:border-accent transition"
                  >
                    Login
                  </Link>

                  <Link
                    href="/Register"
                    className="px-5 py-2 border-2 border-white rounded-full font-semibold text-white hover:bg-accent hover:border-accent transition"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="focus:outline-none"
              >
                {mobileMenu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="lg:hidden bg-primary px-5 pt-4 pb-4 space-y-2 border-t border-accent">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block font-medium py-2 transition ${
                  pathname === link.href
                    ? "text-accent underline underline-offset-4"
                    : "text-white hover:text-accent"
                }`}
                onClick={() => setMobileMenu(false)}
              >
                {link.name}
              </Link>
            ))}

            {status == "authenticated" ? (
              <>
                <button
                  onClick={() => signOut()}
                  className="px-5 py-2 border-2 border-white rounded-full font-semibold text-white hover:bg-accent hover:border-accent transition"
                >
                  Singout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-5 py-2 border-2 border-white rounded-full font-semibold text-white hover:bg-accent hover:border-accent transition"
                >
                  Login
                </Link>

                <Link
                  href="/Register"
                  className="px-5 py-2 border-2 border-white rounded-full font-semibold text-white hover:bg-accent hover:border-accent transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    );
  } else {
    return <></>;
  }
}
