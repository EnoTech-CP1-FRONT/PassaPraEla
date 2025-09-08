import React from "react";

// --- DADOS MOCKADOS ---
// Em uma aplicação real, estes dados viriam de uma API.
const jogadorasData = [
  {
    id: 1,
    nome: "Kerolin",
    posicao: "Atacante",
    imagemUrl: "https://placehold.co/80x80/EFEFEF/333?text=Kerolin",
    time: {
      nome: "Time A",
      logoUrl:
        "https://scontent.fgru5-1.fna.fbcdn.net/v/t39.30808-6/312501211_483135050592038_25542434268446223_n.png?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s_tUQVUCg8EQ7kNvwGw_lNw&_nc_oc=AdkXxludsIzhsgBnETzvTRpKQznh2gkchSr8payzTzvDRi2YwkV1igAv1I-jNid_T7o&_nc_zt=23&_nc_ht=scontent.fgru5-1.fna&_nc_gid=xEx9AjEiJLN9ZVXBDkwrZA&oh=00_Afb41VmeMRK2lRVk1pgLHWWvv89gA4iRqiTE2AiUncA0yg&oe=68C40B4E",
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
        "https://scontent.fgru5-1.fna.fbcdn.net/v/t39.30808-6/312501211_483135050592038_25542434268446223_n.png?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s_tUQVUCg8EQ7kNvwGw_lNw&_nc_oc=AdkXxludsIzhsgBnETzvTRpKQznh2gkchSr8payzTzvDRi2YwkV1igAv1I-jNid_T7o&_nc_zt=23&_nc_ht=scontent.fgru5-1.fna&_nc_gid=xEx9AjEiJLN9ZVXBDkwrZA&oh=00_Afb41VmeMRK2lRVk1pgLHWWvv89gA4iRqiTE2AiUncA0yg&oe=68C40B4E",
    },
  },
];

const CardJogadora = ({ jogadora }) => {
  const { nome, posicao, imagemUrl, time, proximoJogo } = jogadora;

  const JogoEmCasa = () => (
    <>
      <img
        src={time.logoUrl}
        alt={`Logo do ${time.nome}`}
        className="h-8 w-8"
      />
      <span className="text-gray-400 font-bold">x</span>
      <img
        src={proximoJogo.logoAdversarioUrl}
        alt={`Logo do ${proximoJogo.adversario}`}
        className="h-8 w-8"
      />
    </>
  );

  const JogoFora = () => (
    <>
      <img
        src={proximoJogo.logoAdversarioUrl}
        alt={`Logo do ${proximoJogo.adversario}`}
        className="h-8 w-8"
      />
      <span className="text-gray-400 font-bold">x</span>
      <img
        src={time.logoUrl}
        alt={`Logo do ${time.nome}`}
        className="h-8 w-8"
      />
    </>
  );

  return (
    <article className="bg-white rounded-xl shadow-md p-3 flex items-center justify-between space-x-4">
      {/* Seção Time e Jogadora */}
      <div className="flex items-center space-x-4 flex-1">
        <img
          src={time.logoUrl}
          alt={`Logo do ${time.nome}`}
          className="h-12 w-12"
        />
        <div className="flex-shrink-0">
          <img
            src={imagemUrl}
            alt={`Foto de ${nome}`}
            className="h-20 w-20 object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{nome}</h3>
          <p className="text-gray-500">{posicao}</p>
        </div>
      </div>

      {/* Seção Próximo Jogo */}
      <div className="flex items-center justify-center space-x-2 w-48">
        {proximoJogo.local === "casa" ? <JogoEmCasa /> : <JogoFora />}
      </div>

      {/* Seção do Botão */}
      <div className="w-48 flex justify-end">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-10 rounded-lg transition-colors duration-300">
          Escalar
        </button>
      </div>
    </article>
  );
};

const Header = () => (
  <header className="bg-gradient-to-r from-purple-800 to-purple-600 text-white font-semibold p-4 rounded-lg flex justify-between  mb-4">
    <div className="flex-1 ">
      <span>Time</span>
    </div>
    <div className="w-48 ">
      <span>Jogadora</span>
    </div>
    <div className="w-48 text-right">
      <span>Próximo Jogo</span>
    </div>
  </header>
);

const PaginaSelecaoJogadoras = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <Header />
        <main className="space-y-4">
          {jogadorasData.map((jogadora) => (
            <CardJogadora key={jogadora.id} jogadora={jogadora} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default PaginaSelecaoJogadoras;
