// src/components/layout/Header.jsx
// import { Menu } from 'lucide-react';
// import logoPassaABola from '../../assets/logo-passa-a-bola.svg';
import Container from '../common/Container';
import LogoPassaABola from '../../assets/logo-passa-a-bola.svg'


export default function Header() {
  return (
    <header className="py-4 px-6 md:px-10 flex justify-between items-center sticky top-0 z-20 text-5 bg-gradient-to-b from-[rgba(38,0,50,0.55)] via-[rgba(38,0,50,0.55)] to-[rgba(17,0,50,0.55)]">
      <div className="flex items-center gap-3">
        <img src={LogoPassaABola} alt="Logo Passa a Bola" className="w-10 h-10 block" />
        <span className="font-bold text-[28px] hidden sm:block">Passa a Bola</span>
      </div>
      <nav className="hidden md:flex gap-6 items-center">
        <a href="#" className="hover:text-purple-400 text-[22px]">Destaques</a>
        <a href="#" className="hover:text-purple-400 text-[22px]">História</a>
        <a href="#" className="hover:text-purple-400 text-[22px]">Regras</a>
        <a href="#" className="bg-purple-600 px-4 py-2 rounded-full font-semibold text-[18px] hover:bg-purple-700">
          Criar conta
        </a>
      </nav>
       
    </header>
  );
}