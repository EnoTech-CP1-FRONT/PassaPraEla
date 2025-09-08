import CapaCadastrese from "../assets/capaCadastrese.png";
import LogoPassaABolaBlack from "../assets/logo-passa-a-bola-black.png";
import { NavLink } from "react-router";
import FormsLogin from "../core-components/FormsLogin";

export default function Cadastrese() {
  return (
    <main className="grid grid-cols-2">
      <img
        src={CapaCadastrese}
        alt="imagem das donas do passa a bola"
        className="h-[100vh] w-full"
      />

      <div className="flex flex-col items-center p-8 text-black w-full ">
        <div className="relative mb-8">
          <h1 className="text-4xl">Passa Pra Ela</h1>
          <img
            src={LogoPassaABolaBlack}
            alt="Logo Passa a Bola"
            className="w-14 h-14 absolute top-1/2 -translate-y-1/2 right-full mr-4"
          />
        </div>
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl">Login</h2>
          </div>

          <FormsLogin />

          <div className="mt-6 flex gap-4 text-left">
            <p>Não tem uma conta?</p>
            <NavLink to="/forms-game">
              <span className="text-blue-700 cursor-pointer">
                Crie sua conta no Passa pra Ela
              </span>
            </NavLink>
          </div>
          <div className="mt-4 flex gap-4 text-left">
            <p>Quer cadastrar sua Equipe para a Copa?</p>
            <NavLink to="/forms">
              <span className="text-blue-700 cursor-pointer">
                Cadastre sua Equipe
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}
