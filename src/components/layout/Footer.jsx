// src/components/layout/Footer.jsx

import Logo from "../../assets/icons/logo-passa-a-bola.svg?react";
import Icon from "../common/Icon";
import LogoGitHub from "../../assets/icons/github-logo.svg?react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-10 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 ">
          <div className="flex items-center gap-3 mb-4">
            <Icon svg={Logo} alt="Logo Passa a Bola" className="w-10 h-10" />
            <span className="font-bold text-xl">PASSA A BOLA</span>
          </div>
          <div className="mb-6">
            <h3 className=" mb-2">Sobre nós: </h3>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@passabola">YouTube</a>
              <a href="https://open.spotify.com/show/18H1ysI9zyDIRahuCnZGQr?si=2663f6dc06a54595">
                Spotify
              </a>
            </div>
          </div>
          <h3 className="">contatos: </h3>
          <a>passaabola@gmail.com</a>
          {/* Adicione informações de contato aqui */}
        </div>
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4 text-[1.3rem]">
            <h3>Gabriel Akira</h3>
            <a href="#">
              <Icon svg={LogoGitHub} />
            </a>
          </div>
          <div className="flex items-center gap-3 mb-4 text-[1.3rem]">
            <h3>Ana Luiza</h3>
            <a href="#">
              <Icon svg={LogoGitHub} />
            </a>
          </div>
          <div className="flex items-center gap-3 mb-4 text-[1.3rem]">
            <h3>Gustavo Santos</h3>
            <a href="#">
              <Icon svg={LogoGitHub} />
            </a>
          </div>
          <div className="flex items-center gap-3 mb-4 text-[1.3rem]">
            <h3>Mauro Carlos</h3>
            <a href="#">
              <Icon svg={LogoGitHub} />
            </a>
          </div>
        </div>
        <div className="md:col-span-1 flex items-start justify-end">
          <button className="border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
            [cite_start]ENVIAR MENSAGEM [cite: 276]
          </button>
        </div>
      </div>
    </footer>
  );
}
