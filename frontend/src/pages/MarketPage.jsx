import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTeam } from "../context/useTeam";

// **NOVO**: O CardJogadora agora recebe a informação se a jogadora já foi selecionada
const CardJogadora = ({ jogadora, posicao, jaSelecionada }) => {
  const { escalarJogadora } = useTeam();
  const navigate = useNavigate();

  const handleEscalar = () => {
    if (jaSelecionada) return; // Não faz nada se o botão estiver desabilitado
    escalarJogadora(posicao, jogadora);
    navigate("/teams");
  };

  return (
    <article className={`bg-white rounded-xl shadow-md p-3 flex items-center justify-between space-x-4 ${jaSelecionada ? 'opacity-50' : ''}`}>
      <div className="flex items-center space-x-4 flex-1">
        <div className="flex-shrink-0">
          <img
            src={`http://localhost:3001${jogadora.url_imagem}`}
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
          // **MUDANÇA VISUAL**: O botão muda de cor e fica desabilitado se a jogadora já foi selecionada
          className={`font-bold py-2 px-6 rounded-lg transition-colors duration-300 ${
            jaSelecionada
              ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
          disabled={jaSelecionada}
        >
          {jaSelecionada ? 'Já Escalada' : 'Escalar'}
        </button>
      </div>
    </article>
  );
};

const PaginaSelecaoJogadoras = () => {
  const [params] = useSearchParams();
  const posicaoQuery = params.get("posicao");
  
  // **NOVO**: Pega o time atual do contexto
  const { team } = useTeam(); 

  const [jogadoras, setJogadoras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ... (seu código de fetchJogadoras permanece o mesmo)
    const fetchJogadoras = async () => {
        try {
          const response = await fetch("http://localhost:3001/jogadoras");
          if (!response.ok) {
            throw new Error("Não foi possível buscar os dados das jogadoras.");
          }
          const data = await response.json();
          setJogadoras(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchJogadoras();
  }, []);

  const mapeamentoPosicao = {
      GOL: "Goleira", DEF: "Zagueira", MEI: "Meio-campo", ATA: "Atacante"
  };
  const tipoPosicao = posicaoQuery.replace(/[0-9]/g, ''); 
  const nomePosicaoFiltro = mapeamentoPosicao[tipoPosicao];

  const jogadorasFiltradas = jogadoras.filter(j => j.posicao === nomePosicaoFiltro);
  
  // **NOVO**: Cria uma lista de IDs das jogadoras já selecionadas para fácil verificação
  const idsJogadorasSelecionadas = new Set(Object.values(team).filter(p => p).map(p => p.id));

  if (loading) return <div className="text-center p-8">Carregando...</div>;
  if (error) return <div className="text-center p-8 text-red-500">Erro: {error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold mb-4">Selecione para a posição: {nomePosicaoFiltro}</h2>
        {jogadorasFiltradas.length > 0 ? (
          jogadorasFiltradas.map((jogadora) => (
            <CardJogadora
              key={jogadora.id}
              jogadora={jogadora}
              posicao={posicaoQuery}
              // **NOVO**: Passa a informação para o card
              jaSelecionada={idsJogadorasSelecionadas.has(jogadora.id)}
            />
          ))
        ) : (
          <p>Nenhuma jogadora encontrada para esta posição.</p>
        )}
      </div>
    </div>
  );
};

export default PaginaSelecaoJogadoras;