import React, { useState, useEffect } from "react"; // Importe useState e useEffect
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTeam } from "../context/useTeam";

// A lista de dados mockados foi REMOVIDA
// const jogadorasData = [ ... ];

const CardJogadora = ({ jogadora, posicao }) => {
  const { escalarJogadora } = useTeam();
  const navigate = useNavigate();

  const handleEscalar = () => {
    escalarJogadora(posicao, jogadora);
    navigate("/teams");
  };

  // ATENÇÃO: Os dados do banco são diferentes dos mockados.
  // O banco não tem 'time' ou 'proximoJogo'. Vamos ajustar o card para refletir isso.
  // A imagem vem de 'url_imagem' e não de 'imagemUrl'.
  return (
    <article className="bg-white rounded-xl shadow-md p-3 flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4 flex-1">
        <div className="flex-shrink-0">
          <img
            // Ajuste aqui para usar o caminho da imagem do banco de dados
            src={"http://localhost:3001" + jogadora.url_imagem} 
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

  // Estados para armazenar as jogadoras, o status de carregamento e possíveis erros
  const [jogadoras, setJogadoras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect para buscar os dados da API quando o componente for montado
  useEffect(() => {
    const fetchJogadoras = async () => {
      try {
        // A URL deve bater com a porta e o endpoint da sua API
        const response = await fetch("http://localhost:3001/jogadoras");
        if (!response.ok) {
          throw new Error("Não foi possível buscar os dados das jogadoras.");
        }
        const data = await response.json();
        setJogadoras(data); // Armazena os dados no estado
      } catch (err) {
        setError(err.message); // Armazena a mensagem de erro
      } finally {
        setLoading(false); // Finaliza o carregamento (com sucesso ou erro)
      }
    };

    fetchJogadoras();
  }, []); // O array vazio [] garante que isso só rode uma vez

  // Renderização condicional
  if (loading) {
    return <div className="text-center p-8">Carregando jogadoras...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">Erro: {error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold mb-4">
          Selecione uma jogadora para {posicao}
        </h2>
        {/* Mapeia sobre o estado 'jogadoras' que veio da API */}
        {jogadoras.map((jogadora) => (
          <CardJogadora key={jogadora.id} jogadora={jogadora} posicao={posicao} />
        ))}
      </div>
    </div>
  );
};

export default PaginaSelecaoJogadoras;