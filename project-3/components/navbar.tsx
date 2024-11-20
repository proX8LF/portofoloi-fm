"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="fixed w-full backdrop-blur-md bg-background/80 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Fah-Mohamed
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="hover:text-primary">About</Link>
            <Link href="/#projects" className="hover:text-primary">Projects</Link>
            <Link href="/#skills" className="hover:text-primary">Skills</Link>
            <Link href="/#certifications" className="hover:text-primary">Certifications</Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/#about" className="hover:text-primary">About</Link>
              <Link href="/#projects" className="hover:text-primary">Projects</Link>
              <Link href="/#skills" className="hover:text-primary">Skills</Link>
              <Link href="/#certifications" className="hover:text-primary">Certifications</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}