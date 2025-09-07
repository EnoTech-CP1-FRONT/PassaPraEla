import CapaCadastrese from "../assets/capaCadastrese.png";
import LogoPassaABolaBlack from "../assets/logo-passa-a-bola-black.png";
import { useNavigate } from "react-router-dom";

export default function Cadastrese() {
  const navigate = useNavigate();

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
          <form
            className="mt-6 flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault(); // Impede o recarregamento da página
              // Aqui você adicionaria sua lógica de login
              navigate("/forms"); // Redireciona para a Home Page
            }}
          >
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Email</label>
              <input className="p-2 border-none bg-8 rounded-md" required />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Senha</label>
              <input className="p-2 border-none bg-8 rounded-md" required />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="lembrar-login" />
              <label htmlFor="lembrar-login">Lembrar login</label>
            </div>

            <button
              type="submit"
              className="bg-3 mt-4 text-white text-2xl py-2 px-4 rounded-md hover:bg-purple-800 transition-colors"
            >
              Login
            </button>
          </form>
          <div className="mt-6 flex gap-4 text-left">
            <p>Não tem uma conta?</p>
            <span className="text-blue-700 cursor-pointer">
              Crie sua conta no Passa pra Ela
            </span>
          </div>
          <div className="mt-4 flex gap-4 text-left">
            <p>Quer cadastrar sua Equipe para a Copa?</p>
            <span className="text-blue-700 cursor-pointer">
              Cadastre sua Equipe
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
