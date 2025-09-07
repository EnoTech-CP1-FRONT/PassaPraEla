import { useState } from "react";
import Container from "../components/componentsRegistro/ContainerRegistro";
import SectionRegistro from "../components/componentsRegistro/SectionRegistro";
import Form from "../components/common/form";
import InputText from "../components/common/InputText";
import FormRegistro from "../components/componentsRegistro/FormRegistro";

export default function FormsPage() {
  const [jogadoras, setJogadoras] = useState([{}]);

  const adicionarJogadora = () => {
    setJogadoras([...jogadoras, {}]);
  };

  return (
    <Container className="bg-purple-100">
        <SectionRegistro className="bg-fuchsia-800/50" />

        <Form adress='/cadastrese' className="py-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormRegistro />
            <div className="md:col-span-2">
              <label className="block text-gray-700">
                Você autoriza ser contatado(a) por marcas, clubes ou projetos
                ligados ao futebol feminino?
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input type="radio" name="contato" className="form-radio" required />
                  <span className="ml-2">SIM</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input type="radio" name="contato" className="form-radio" required />
                  <span className="ml-2">NÃO</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Estado que vive</label>
              <input type="text" className="w-full mt-1 p-2 border rounded" required />
            </div>
            <div>
              <label className="block text-gray-700">Cidade que vive</label>
              <input type="text" className="w-full mt-1 p-2 border rounded" required />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">DADOS DO TIME</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Nome do Time</label>
                <input type="text" className="w-full mt-1 p-2 border rounded" required />
              </div>
            </div>

            {jogadoras.map((_, index) => (
              <div key={index} className="mt-6 p-5 rounded-2xl bg-purple-50">
                <h3 className="text-xl font-bold mb-4">Jogadora {index + 1}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700">
                      Email para contato
                    </label>
                    <input
                      type="email"
                      className="w-full mt-1 p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">
                      Número de telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full mt-1 p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">
                      Posição de preferência em campo
                    </label>
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Idade</label>
                    <input
                      type="number"
                      className="w-full mt-1 p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">
                      Possui experiência em futebol?
                    </label>
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">
                      Número da roupa para o uniforme
                    </label>
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">
                      Já participou de campeonatos semelhantes?
                    </label>
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">
                      Possui alguma condição médica:
                    </label>
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700">
                      Está apto para a prática esportiva?
                    </label>
                    <div className="mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={`apto-${index}`}
                          className="form-radio"
                          required
                        />
                        <span className="ml-2">SIM</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700">
                      Usa algum medicamento contínuo?
                    </label>
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700">
                      Autorizo o uso de minha imagem
                    </label>
                    <div className="mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={`imagem-${index}`}
                          className="form-radio"
                          required
                        />
                        <span className="ml-2">SIM</span>
                      </label>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700">
                      Aceito seguir as regras do campeonato e respeitar as
                      decisões da organização e arbitragem.
                    </label>
                    <div className="mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={`regras-${index}`}
                          className="form-radio"
                          required
                        />
                        <span className="ml-2">SIM</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700">CPF</label>
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">
                      Imagem do documento com foto
                    </label>
                    <input
                      type="file"
                      className="w-full mt-1 p-2 border rounded"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="md:col-span-2 mt-6">
              <button
                type="button"
                onClick={adicionarJogadora}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                ADICIONAR MAIS JOGADORAS
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              CONSENTIMENTO DE USO DOS DADOS (LGPD)
            </h2>
            <p className="text-gray-600">
              As informações coletadas neste formulário poderão ser usadas para
              análises agregadas, apresentação de dados a parceiros e, caso
              autorizado, para comunicação direta sobre futebol feminino. Seus
              dados não serão vendidos nem compartilhados com terceiros fora
              deste contexto.
            </p>
            <div className="mt-4">
              <label className="block text-gray-700">
                Você autoriza o uso das suas respostas para os fins descritos
                acima?
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input type="radio" name="lgpd" className="form-radio" required />
                  <span className="ml-2">SIM, EU AUTORIZO.</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input type="radio" name="lgpd" className="form-radio" required />
                  <span className="ml-2">NÃO.</span>
                </label>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">
                Deseja receber notícias via email ou whatsapp?
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input type="radio" name="noticias" className="form-radio" required />
                  <span className="ml-2">SIM</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input type="radio" name="noticias" className="form-radio" re />
                  <span className="ml-2">NÃO</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-9 text-center">
            <button
              type="submit"
              className="bg-purple-500 text-white py-3 px-15 rounded-full text-lg font-bold hover:bg-purple-700"
            >
              ENVIAR
            </button>
          </div>
        </Form>
    </Container>
  );
}
