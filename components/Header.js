import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Menu from "./Menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Fechar o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica se o clique foi fora do menu ou do botão
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fechar o menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-white text-gray-800 fixed w-full top-0 left-0 z-50 shadow-md shadow-gray-600">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        <div className="w-28 h-8">
          <a href="/">
            <Image
              src="/images/logo.png"
              alt="Imagem"
              width={170}
              height={60}
              className="rounded-lg"
            />
          </a>
        </div>

        {/* Menu de navegação para desktop */}
        <nav className="hidden md:flex space-x-8 lg:pr-32">
          <Menu />
        </nav>

        {/* Menu responsivo (mobile) */}
        <div className="md:hidden">
          <button
            ref={buttonRef}
            className="text-gray-800 text-3xl" 
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="bg-white shadow-md w-full top-0 left-0 z-40 py-8"
          ref={menuRef}
        >
          <div className="flex flex-col justify-start h-full">
            <Menu />
          </div>
        </div>
      )}
    </header>
  );
}
