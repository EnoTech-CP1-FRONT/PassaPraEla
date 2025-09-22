import React, { useState, useEffect } from "react";

const statFields = [
  { name: "gols", label: "Gols" },
  { name: "assistencias", label: "Assistências" },
  { name: "finalizacoes", label: "Finalizações" },
  { name: "desarmes", label: "Desarmes" },
  { name: "defesas", label: "Defesas (Goleira)" },
  { name: "gol_sofrido", label: "Gols Sofridos (Goleira)" },
  { name: "cartao_amarelo", label: "C. Amarelo" },
  { name: "cartao_vermelho", label: "C. Vermelho" },
];

export default function AdminDashboard() {
  const [jogadoras, setJogadoras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJogadoras = async () => {
      try {
        const response = await fetch("http://localhost:3001/jogadoras");
        if (!response.ok) {
          throw new Error("Falha ao buscar jogadoras.");
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

  const handleStatChange = (jogadoraId, field, value) => {
    setJogadoras((prevJogadoras) =>
      prevJogadoras.map((j) =>
        j.id === jogadoraId ? { ...j, [field]: Number(value) } : j
      )
    );
  };

  const handleSaveStats = async (jogadoraId) => {
    const jogadora = jogadoras.find((j) => j.id === jogadoraId);
    if (!jogadora) return;

    // Cria um objeto contendo apenas as estatísticas que o backend espera.
    // Garante que valores nulos ou indefinidos sejam enviados como 0.
    const statsData = {
      gols: jogadora.gols || 0,
      assistencias: jogadora.assistencias || 0,
      finalizacoes: jogadora.finalizacoes || 0,
      desarmes: jogadora.desarmes || 0,
      defesas: jogadora.defesas || 0,
      gol_sofrido: jogadora.gol_sofrido || 0,
      cartao_amarelo: jogadora.cartao_amarelo || 0,
      cartao_vermelho: jogadora.cartao_vermelho || 0,
    };

    try {
      const response = await fetch(
        `http://localhost:3001/jogadoras/${jogadoraId}/stats`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(statsData),
        }
      );

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Falha ao salvar.");
      }

      // Atualiza a pontuação da jogadora no estado local com o valor calculado pelo backend
      setJogadoras((prev) =>
        prev.map((j) =>
          j.id === jogadoraId ? { ...j, pontuacao: result.novaPontuacao } : j
        )
      );

      alert(result.message);
    } catch (err) {
      alert(`Erro: ${err.message}`);
    }
  };

  if (loading) return <div className="p-8 text-center">Carregando...</div>;
  if (error)
    return <div className="p-8 text-center text-red-500">Erro: {error}</div>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">
        Painel de Administração - Pontuação
      </h1>
      <div className="space-y-6">
        {jogadoras.map((jogadora) => (
          <div key={jogadora.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <img
                  src={`http://localhost:3001${jogadora.url_imagem}`}
                  alt={jogadora.nome}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-2xl font-bold">{jogadora.nome}</h2>
                  <p className="text-gray-600">{jogadora.posicao}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg">Pontuação Atual</p>
                <p className="text-3xl font-bold text-purple-600">
                  {(jogadora.pontuacao || 0).toFixed(2)}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {statFields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type="number"
                    value={jogadora[field.name] || 0}
                    onChange={(e) =>
                      handleStatChange(jogadora.id, field.name, e.target.value)
                    }
                    className="mt-1 w-full p-2 border rounded-md"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => handleSaveStats(jogadora.id)}
              className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
            >
              Salvar Pontuação
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
