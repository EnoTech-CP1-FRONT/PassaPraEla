import { createContext, useState } from "react";

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState({
    GOL: null,
    DEF1: null,
    DEF2: null,
    MEI1: null,
    MEI2: null,
    ATA1: null,
    ATA2: null,
  });

  const escalarJogadora = (posicao, jogadora) => {
    // **NOVA LÓGICA DE VERIFICAÇÃO**
    // 1. Pega todos os jogadores já escalados no time.
    const jogadoresAtuais = Object.values(team);

    // 2. Verifica se a jogadora que está sendo escalada (pelo ID) já existe na lista.
    const jaEscalada = jogadoresAtuais.some(
      (p) => p && p.id === jogadora.id
    );

    // 3. Se ela já foi escalada, mostra um alerta e interrompe a função.
    if (jaEscalada) {
      alert(`${jogadora.nome} já está na sua equipe e não pode ser selecionada novamente.`);
      return; // Impede a atualização do estado
    }

    // 4. Se não estiver escalada, atualiza o time normalmente.
    setTeam((prev) => ({ ...prev, [posicao]: jogadora }));
  };

  return (
    <TeamContext.Provider value={{ team, escalarJogadora }}>
      {children}
    </TeamContext.Provider>
  );
};