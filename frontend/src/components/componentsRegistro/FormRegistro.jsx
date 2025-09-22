import { useState } from "react";
import InputText from "../common/InputText";
import { useNavigate } from "react-router-dom";
import { useTeam } from "../../context/useTeam"; // Importa o hook do contexto

export default function FormRegistro({ adress }) {
  const { setTeamName } = useTeam(); // Pega a função para definir o nome do time
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefone: "",
    data: "",
    cpf: "",
    senha: "",
    nomeDaEquipe: "", // Adiciona o nome da equipe ao estado do formulário
  });
  const navigate = useNavigate();

  // Função para atualizar o estado quando o usuário digita
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Salva o nome do time no contexto global
    if (formData.nomeDaEquipe.trim()) {
      setTeamName(formData.nomeDaEquipe);
    }

    try {
      const response = await fetch("http://localhost:3001/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          senha: formData.senha,
        }),
      });

      const data = await response.json();
      alert(data.message); // Exibe uma mensagem de sucesso ou erro do backend
      // Navega para a próxima página apenas se a requisição foi bem-sucedida (ex: status 201 Created)
      if (response.ok) {
        navigate(adress);
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Falha na comunicação com o servidor.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputText
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="registro"
        >
          Nome Completo
        </InputText>
        <InputText
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="registro"
        >
          Email para contato
        </InputText>
        <InputText
          id="telefone"
          type="tel"
          value={formData.telefone}
          onChange={handleChange}
          className="registro"
        >
          Número de telefone
        </InputText>
        <InputText
          id="data"
          type="date"
          value={formData.data}
          onChange={handleChange}
          className="registro"
        >
          Data de Nacimento
        </InputText>
        <InputText
          id="cpf"
          value={formData.cpf}
          onChange={handleChange}
          className="registro"
        >
          CPF
        </InputText>
        <InputText
          id="senha"
          type="password"
          value={formData.senha}
          onChange={handleChange}
          className="registro"
        >
          Senha
        </InputText>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">DADOS DO TIME</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            id="nomeDaEquipe"
            value={formData.nomeDaEquipe}
            onChange={handleChange}
            className="registro"
          >
            Qual será o nome da sua equipe?
          </InputText>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="bg-purple-600 text-white px-20 py-3 rounded-md hover:bg-purple-700 mt-5"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}
