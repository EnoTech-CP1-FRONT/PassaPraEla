import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTeam } from "../context/useTeam";
// Dados mockados
const jogadorasData = [
  {
    id: 1,
    nome: "Kerolin",
    posicao: "Atacante",
    imagemUrl: "https://placehold.co/80x80/EFEFEF/333?text=Kerolin",
    time: {
      nome: "Time A",
      logoUrl:
        "https://scontent.fgru5-1.fna.fbcdn.net/v/t39.30808-6/312501211_483135050592038_25542434268446223_n.png",
    },
    proximoJogo: {
      adversario: "Desimpedidos",
      logoAdversarioUrl:
        "https://imagensempng.com.br/wp-content/uploads/2023/08/Logo-Desimpedidos-1024x1024.png",
      local: "casa",
    },
  },
  {
    id: 2,
    nome: "Gio",
    posicao: "Atacante",
    imagemUrl: "https://placehold.co/80x80/EFEFEF/333?text=Gio",
    time: {
      nome: "Desimpedidos",
      logoUrl:
        "https://imagensempng.com.br/wp-content/uploads/2023/08/Logo-Desimpedidos-1024x1024.png",
    },
    proximoJogo: {
      adversario: "Time A",
      logoAdversarioUrl:
        "https://scontent.fgru5-1.fna.fbcdn.net/v/t39.30808-6/312501211_483135050592038_25542434268446223_n.png",
    },
  },
];

const CardJogadora = ({ jogadora, posicao }) => {
  const { escalarJogadora } = useTeam();
  const navigate = useNavigate();

  const handleEscalar = () => {
    escalarJogadora(posicao, jogadora);
    navigate("/teams");
  };

  return (
    <article className="bg-white rounded-xl shadow-md p-3 flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4 flex-1">
        <img
          src={jogadora.time.logoUrl}
          alt={`Logo do ${jogadora.time.nome}`}
          className="h-12 w-12"
        />
        <div className="flex-shrink-0">
          <img
            src={jogadora.imagemUrl}
            alt={`Foto de ${jogadora.nome}`}
            className="h-20 w-20 object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{jogadora.nome}</h3>
          <p className="text-gray-500">{jogadora.posicao}</p>
        </div>
      </div>

      <div className="w-48 flex justify-end">
        <button
          onClick={handleEscalar}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
        >
          Escalar
        </button>
      </div>
    </article>
  );
};

const PaginaSelecaoJogadoras = () => {
  const [params] = useSearchParams();
  const posicao = params.get("posicao");

  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold mb-4">
          Selecione uma jogadora para {posicao}
        </h2>
        {jogadorasData.map((jogadora) => (
          <CardJogadora key={jogadora.id} jogadora={jogadora} posicao={posicao} />
        ))}
      </div>
    </div>
  );
};

export default PaginaSelecaoJogadoras;
