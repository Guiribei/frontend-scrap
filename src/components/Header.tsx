
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-background/90 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-law-light" />
            <span className="ml-2 text-xl font-bold">Scrap<span className="text-law-light">pager</span></span>
          </div>

          <div className="hidden md:block">
            <a href="#features">
              <Button className="download-button bg-law-light hover:bg-law-medium text-white">
                Saiba mais!
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Button
                className="bg-law-light hover:bg-law-medium text-white w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Retrieve Certificate
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
