"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Team", href: "/team" },
    { name: "Founders", href: "/founders" },
    { name: "Investors", href: "/investors" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex flex-col md:flex-row justify-between md:items-center px-6 md:px-10 py-4 md:py-6 backdrop-blur-xl border-b border-black/5 dark:border-white/5 sticky top-0 z-50 bg-white/70 dark:bg-[#05070D]/70 transition-colors">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpeg"
            alt="Enlighten Capital"
            width={180}
            height={40}
            className="h-8 md:h-10 w-auto rounded-md shadow-sm"
            priority
          />
        </Link>

        <div className="flex items-center gap-4 md:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2" aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileMenuOpen} aria-controls="primary-navigation">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div id="primary-navigation" className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-start md:items-center gap-6 mt-6 md:mt-0`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}

        <div className="flex items-center gap-4 w-full md:w-auto pt-4 md:pt-0 border-t border-black/5 dark:border-white/5 md:border-none">
          <a
            href="https://forms.zohopublic.in/enlightencapital06gm1/form/StartupFundingApplication/formperma/xdgG00m0sh5H7nLcAj0cvoZVTwj35TB4cYEU_GcO4rU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] bg-[#C9A14A] hover:bg-[#b08d41] text-black px-5 py-2.5 rounded-md font-bold tracking-widest uppercase transition-all shadow-lg shadow-[#C9A14A]/10"
          >
            Apply for Funding
          </a>
        </div>
      </div>
    </nav>
  );
}
