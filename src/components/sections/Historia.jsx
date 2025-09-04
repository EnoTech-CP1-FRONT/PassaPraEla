// src/components/sections/Historia.jsx
export default function Historia() {
  return (
    <section className="ml-10 mr-10 bg-gradient-to-r from-[rgba(30,0,101,0.90)] to-[rgba(115,0,139,0.90)] text-white py-12 px-6 md:px-10">
      <div className="flex flex-col max-w-6xl mx-auto">
        <h2 className="bg-6 p-4 text-5xl font-bold text-center mb-8">HISTÓRIA DO FUTEBOL FEMININO</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Esquerdo */}
          <div className="bg-6 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">PRIMEIRAS EQUIPES DE FUTEBOL FEMININO NO BRASIL</h3>
            <p className="text-gray-300">
              Em 1983, o Esporte Clube Radar, do Rio de Janeiro, criou um dos primeiros times femininos do país. O time dominou o cenário nacional durante a década, vencendo os torneios seguintes. Entre 1983 e 1988, o Radar garantiu o hexacampeonato do Campeonato Carioca e se tornou a base da Seleção Brasileira.
            </p>
          </div>
          {/* Card Direito */}
          <div className="bg-6 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">BRASILEIRÃO FEMININO NEOENERGIA</h3>
            <p className="text-gray-300">
              O Campeonato Brasileiro de Futebol Feminino de 2024 (Confederação Brasileira de Futebol) com a participação dos 20 melhores clubes do Brasil. A competição é dividida em três categorias, Séries A1, A2 e A3. A série A1 é a elite da competição da categoria, formada por 16 clubes e uma série A2, também com 16 times.
            </p>
          </div>
          <div>

          </div>
        </div>
        <div className="text-center mt-8">
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
                Leia mais
            </button>
        </div>
      </div>
    </section>
  );
}