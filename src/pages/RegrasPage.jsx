export default function RegrasPage() {
  return (
    <div className="bg-gray-100 p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">
          O que é Passa Pra Ela?
        </h1>

        <p className="text-lg mb-4">
          Passa Pra Ela seria uma forma emocionante e envolvente para aquelas
          que amam o esporte. Seria uma competição estratégica onde cada
          participante monta sua própria equipe virtual de jogadores.
        </p>
        <p className="text-lg mb-4">
          O objetivo principal seria acumular o máximo de pontos possível ao
          longo do campeonato, com base no desempenho real dessas jogadoras nos
          jogos. As participantes definiriam suas escalações a cada rodada da
          competição, tudo isso com base em suas análises, intuição e
          conhecimento do esporte.
        </p>
        <p className="text-lg mb-4">
          Aqui, cada passe estratégico, desarme crucial e, claro, cada gol
          marcado se transforma em pontos que te levarão à vitória entre amigos.
          Mesmo que você não possa estar dentro de campo como jogadora, a emoção
          do Passa Pra Ela é para todas! Você pode viver a intensidade de cada
          partida, montar seu time dos sonhos e competir com suas amigas da
          mesma forma que qualquer outra participante. A paixão pelo futebol nos
          une, dentro e fora do campo virtual.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Entenda como suas jogadoras virtuais brilham e somam pontos a cada
          partida real:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pontuação de Ataque</h3>
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Gol</td>
                  <td className="p-2">6,0 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Assistência</td>
                  <td className="p-2">3,0 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Falta sofrida</td>
                  <td className="p-2">0,5 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Pênalti sofrido</td>
                  <td className="p-2">1,0 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Hat-trick</td>
                  <td className="p-2">3,0 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Finalização</td>
                  <td className="p-2">0,5 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Pênalti perdido</td>
                  <td className="p-2">-4,0 pts</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Pontuação de Defesa</h3>
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Defesa de Pênalti</td>
                  <td className="p-2">5,0 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Jogo sem sofrer gols</td>
                  <td className="p-2">4,0 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Defesa</td>
                  <td className="p-2">1,2 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Desarme</td>
                  <td className="p-2">0,5 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Gol contra</td>
                  <td className="p-2">-3,0 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Cartão amarelo</td>
                  <td className="p-2">-2,0 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Cartão vermelho</td>
                  <td className="p-2">-2,0 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Gol sofrido</td>
                  <td className="p-2">-1,0 pts</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Pênalti cometido</td>
                  <td className="p-2">-1,0 pts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Um Mergulho no Mundo da Tecnologia: Seu Mês Gratuito no Alura!
        </h2>

        <p className="text-lg mb-4">
          Imagine ter acesso irrestrito a uma plataforma completa de aprendizado
          em tecnologia por um mês inteiro, sem custo algum. Este prêmio é
          exatamente isso: a chave para destravar um universo de conhecimento
          com a Alura!
        </p>

        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Acessar todo o catálogo de cursos da Alura.</li>
          <li>Aprender com instrutores experientes e renomados.</li>
          <li>Participar de fóruns e comunidades.</li>
          <li>Colocar a mão na massa com projetos práticos.</li>
          <li>Aprender no seu ritmo e horário.</li>
          <li>Descobrir um novo futuro profissional.</li>
        </ul>

        <p className="text-lg mb-4">
          Este prêmio é mais do que um mês gratuito, é uma oportunidade de
          transformação. Não deixe essa chance escapar! Seu futuro digital
          começa agora com um mês de Alura totalmente grátis.
        </p>
      </div>
    </div>
  );
}
