"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "h-24 bg-gradient-to-b from-white/95 via-white/60 to-transparent backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`font-bold text-xl ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
          >
            LOGO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className={`transition-colors ${
                isScrolled
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Features
            </Link>
            <Link
              href="#products"
              className={`transition-colors ${
                isScrolled
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Products
            </Link>
            <Link
              href="#about"
              className={`transition-colors ${
                isScrolled
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-white/80 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={`transition-colors ${
                isScrolled
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Contact
            </Link>
            <Button
              className={
                isScrolled
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-white text-slate-900 hover:bg-white/90"
              }
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={!isScrolled ? "text-white hover:bg-white/10" : ""}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-6">
                <Link
                  href="#features"
                  className="hover:text-slate-900 transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#products"
                  className="hover:text-slate-900 transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="#about"
                  className="hover:text-slate-900 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-slate-900 transition-colors"
                >
                  Contact
                </Link>
                <Button className="w-full">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
