import bannerImage from "../assets/imagem-team.jpg";
import fieldImage from "../assets/campo.jpg";
import React from "react";

function TeamsPage() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <header className="relative flex h-[50vh] items-center text-white md:h-[60vh]">
        <img
          src={bannerImage}
          alt="Jogadora de futebol"
          className="absolute inset-0 h-full w-full object-cover brightness-50"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <h1 className="text-5xl font-bold uppercase tracking-wider md:text-8xl">
            Hora de <br />
            Escalar sua <br />
            Equipe
          </h1>
        </div>
      </header>

      <main className="max-w-full mx-auto p-8 bg-white">
        <h2 className="text-4xl font-bold text-purple-400 mb-6">
          Sua Escalação
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Campo de futebol */}
          <div className="w-full lg:w-2/3 relative">
            <img
              src={fieldImage}
              alt="Campo de futebol"
              className="w-full h-auto"
            />

            {/* Goleiro */}
            <div
              className="absolute text-center"
              style={{
                top: "85%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center border-2 border-gray-300">
                <span className="text-4xl text-purple-700">+</span>
              </div>
              <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                GOL
              </span>
            </div>

            {/* Defensor Direito */}
            <div
              className="absolute text-center"
              style={{
                top: "60%",
                left: "65%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center border-2 border-gray-300">
                <span className="text-4xl text-purple-700">+</span>
              </div>
              <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                DEF
              </span>
            </div>

            {/* Defensor Esquerdo */}
            <div
              className="absolute text-center"
              style={{
                top: "60%",
                left: "35%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center border-2 border-gray-300">
                <span className="text-4xl text-purple-700">+</span>
              </div>
              <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                DEF
              </span>
            </div>

            {/* Meio-campo Direito */}
            <div
              className="absolute text-center"
              style={{
                top: "40%",
                left: "80%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center border-2 border-gray-300">
                <span className="text-4xl text-purple-700">+</span>
              </div>
              <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                MEI
              </span>
            </div>

            {/* Meio-campo Esquerdo */}
            <div
              className="absolute text-center"
              style={{
                top: "40%",
                left: "20%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center border-2 border-gray-300">
                <span className="text-4xl text-purple-700">+</span>
              </div>
              <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                MEI
              </span>
            </div>

            {/* Atacante Esquerdo */}
            <div
              className="absolute text-center"
              style={{
                top: "20%",
                left: "35%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center border-2 border-gray-300">
                <span className="text-4xl text-purple-700">+</span>
              </div>
              <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                ATA
              </span>
            </div>

            {/* Atacante Direito */}
            <div
              className="absolute text-center"
              style={{
                top: "20%",
                left: "65%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center border-2 border-gray-300">
                <span className="text-4xl text-purple-700">+</span>
              </div>
              <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                ATA
              </span>
            </div>
          </div>

          <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg text-black">
            <ul className="space-y-3 mb-6">
              <li className="flex justify-between items-center text-lg">
                <span>
                  <span className="font-bold">GOL</span> - Jogador 1
                </span>
                <span className="font-bold text-green-400">0.00</span>
              </li>
              <li className="flex justify-between items-center text-lg">
                <span>
                  <span className="font-bold">DEF</span> - Jogador 2
                </span>
                <span className="font-bold text-green-400">0.00</span>
              </li>
              <li className="flex justify-between items-center text-lg">
                <span>
                  <span className="font-bold">DEF</span> - Jogador 3
                </span>
                <span className="font-bold text-green-400">0.00</span>
              </li>
              <li className="flex justify-between items-center text-lg">
                <span>
                  <span className="font-bold">MEI</span> - Jogador 4
                </span>
                <span className="font-bold text-green-400">0.00</span>
              </li>
              <li className="flex justify-between items-center text-lg">
                <span>
                  <span className="font-bold">MEI</span> - Jogador 5
                </span>
                <span className="font-bold text-green-400">0.00</span>
              </li>
              <li className="flex justify-between items-center text-lg">
                <span>
                  <span className="font-bold">ATA</span> - Jogador 6
                </span>
                <span className="font-bold text-green-400">0.00</span>
              </li>
              <li className="flex justify-between items-center text-lg">
                <span>
                  <span className="font-bold">ATA</span> - Jogador 7
                </span>
                <span className="font-bold text-green-400">0.00</span>
              </li>
            </ul>
            <div className="border-t border-gray-600 pt-4 mb-6">
              <div className="flex justify-between text-lg font-bold">
                <span>PONTOS:</span>
                <span>0.00</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TeamsPage;
