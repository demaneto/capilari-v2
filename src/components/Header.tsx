import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/images/logo/LogoCapilariHorizontal.png"
            alt="Instituto Capilari"
            className="h-12 w-auto"
            width={200}
            height={50}
            loading="eager"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {["Diferenciais", "Depoimentos", "Sobre", "Contato"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium text-${
                    isScrolled ? "primary" : "white"
                  } hover:text-gold-light transition-colors`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary-light text-white"
            onClick={() => window.location.href = "#contato"}
          >
            Agende sua Consulta
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg py-4">
          <ul className="flex flex-col space-y-4 px-6">
            {["Diferenciais", "Depoimentos", "Sobre", "Contato"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block font-medium text-primary hover:text-primary-light transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary-light text-white w-full"
                onClick={() => {
                  window.location.href = "#contato";
                  setMobileMenuOpen(false);
                }}
              >
                Agende sua Consulta
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
