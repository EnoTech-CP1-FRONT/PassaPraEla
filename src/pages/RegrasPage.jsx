import imagemRegras from "../assets/imagem-regras.jpg";
import Button from "../components/common/Button";
import { NavLink } from "react-router";
import TRlinha from "../components/common/TRlinha";

export default function RegrasPage() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-green-50 min-h-screen p-4 sm:p-6 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative">
          <img
            src={imagemRegras}
            alt="imagem regras"
            className="w-full h-auto brightness-50"
          />
          <h1 className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-6xl font-bold tracking-tight text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)] md:text-8xl">
            O que é <br />
            Passa Pra Ela?
          </h1>
        </div>

        <div className="p-6 md:p-12 lg:p-16">
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              <span className="font-bold text-green-600 mr-2">1.</span>
              Passa Pra Ela seria uma forma emocionante e envolvente para
              aquelas que amam o esporte. Seria uma competição estratégica onde
              cada participante monta sua própria equipe virtual de jogadores.
            </p>
            <p>
              <span className="font-bold text-green-600 mr-2">2.</span>O
              objetivo principal seria acumular o máximo de pontos possível ao
              longo do campeonato, com base no desempenho real dessas jogadoras
              nos jogos. As participantes definiriam suas escalações a cada
              rodada da competição, tudo isso com base em suas análises,
              intuição e conhecimento do esporte.
            </p>
            <p className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
              Aqui, cada passe estratégico, desarme crucial e, claro, cada gol
              marcado se transforma em pontos que te levarão à vitória entre
              amigos. Mesmo que você não possa estar dentro de campo como
              jogadora, a emoção do Passa Pra Ela é para todas! Você pode viver
              a intensidade de cada partida, montar seu time dos sonhos e
              competir com suas amigas da mesma forma que qualquer outra
              participante. A paixão pelo futebol nos une, dentro e fora do
              campo virtual.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-purple-800 mt-16 mb-8 text-center">
            Entenda como suas jogadoras virtuais brilham e somam pontos a cada
            partida real:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-700">
                Pontuação de Ataque
              </h3>
              <table className="w-full text-left text-gray-600">
                <thead>
                  <tr>
                    <th className="p-3 text-sm font-semibold uppercase tracking-wider border-b-2 border-gray-200">
                      Ação
                    </th>
                    <th className="p-3 text-sm font-semibold uppercase tracking-wider text-right border-b-2 border-gray-200">
                      Pontos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TRlinha children1="Gol" children2="6,0 pts" />
                  <TRlinha children1="Assistência" children2="3,0 pts" />
                  <TRlinha children1="Falta sofrida" children2="0,5 pts" />
                  <TRlinha children1="Pênalti sofrido" children2="1,0 pts" />
                  <TRlinha children1="Hat-trick" children2="3,0 pts" />
                  <TRlinha children1="Finalização" children2="0,5 pts" />
                  <TRlinha
                    className="red"
                    children1='Pênalti perdido'
                    children2='-4,0 pts'
                  />
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-700">
                Pontuação de Defesa
              </h3>
              <table className="w-full text-left text-gray-600">
                <thead>
                  <tr>
                    <th className="p-3 text-sm font-semibold uppercase tracking-wider border-b-2 border-gray-200">
                      Ação
                    </th>
                    <th className="p-3 text-sm font-semibold uppercase tracking-wider text-right border-b-2 border-gray-200">
                      Pontos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TRlinha children1="Defesa de Pênalti" children2="5,0 pts" />
                  <TRlinha
                    children1="Jogo sem sofrer gols"
                    children2="4,0 pts"
                  />
                  <TRlinha children1="Defesa" children2="1,2 pts" />
                  <TRlinha children1="Desarme" children2="0,5 pts" />
                  <TRlinha
                    className="red"
                    children1="Gol contra"
                    children2="-3,0 pts"
                  />
                  <TRlinha
                    className="red"
                    children1={"Cartão amarelo"}
                    children2="-2,0 pts"
                  />
                  <TRlinha
                    className="red"
                    children1={"Cartão vermelho"}
                    children2="-2,0 pts"
                  />
                  <TRlinha
                    className="red"
                    children1="Gol sofrido"
                    children2="-1,0 pts"
                  />
                  <TRlinha
                    className="red"
                    children1="Pênalti cometido"
                    children2="-1,0 pts"
                  />
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-purple-800 mt-16 mb-8 text-center">
            Um Mergulho no Mundo da Tecnologia: Seu Mês Gratuito no Alura!
          </h2>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Imagine ter acesso irrestrito a uma plataforma completa de
              aprendizado em tecnologia por um mês inteiro, sem custo algum.
              Este prêmio é exatamente isso: a chave para destravar um universo
              de conhecimento com a Alura!
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3 mt-1">
                  &#10003;
                </span>
                <span>Acessar todo o catálogo de cursos da Alura.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3 mt-1">
                  &#10003;
                </span>
                <span>Aprender com instrutores experientes e renomados.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3 mt-1">
                  &#10003;
                </span>
                <span>Participar de fóruns e comunidades.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3 mt-1">
                  &#10003;
                </span>
                <span>Colocar a mão na massa com projetos práticos.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3 mt-1">
                  &#10003;
                </span>
                <span>Aprender no seu ritmo e horário.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3 mt-1">
                  &#10003;
                </span>
                <span>Descobrir um novo futuro profissional.</span>
              </li>
            </ul>

            <p>
              Este prêmio é mais do que um mês gratuito, é uma oportunidade de
              transformação. Não deixe essa chance escapar! Seu futuro digital
              começa agora com um mês de Alura totalmente grátis.
            </p>
            <div className="flex items-center justify-center">
              <NavLink to="/team">
                <Button>Continuar</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
