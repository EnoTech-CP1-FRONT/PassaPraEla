import Container from "../components/componentsRegistro/ContainerRegistro";
import SectionRegistro from "../components/componentsRegistro/SectionRegistro";
import Form from "../components/common/form";
import InputText from "../components/common/InputText";
import FormRegistro from "../components/componentsRegistro/FormRegistro";

const legalInfo = {
  terms: {
    title: "Termos de Uso",
    sections: [
      {
        title: "1. Aceitação dos Termos",
        content:
          "Ao acessar e utilizar o nosso jogo de fantasy, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concorda com qualquer parte destes termos, não deve utilizar nossos serviços.",
      },
      {
        title: "2. Contas de Usuário",
        content:
          "Para acessar o jogo, você deve criar uma conta. Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorram em sua conta. Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado de sua conta.",
      },
      {
        title: "3. Conduta do Usuário",
        content:
          "Você concorda em não usar o serviço para qualquer finalidade ilegal ou proibida. É proibido utilizar o serviço de qualquer forma que possa danificar, desabilitar, sobrecarregar ou prejudicar o jogo ou tentar obter acesso não autorizado a qualquer parte do serviço.",
      },
      {
        title: "4. Propriedade Intelectual",
        content:
          "Todo o conteúdo presente no jogo, incluindo, mas não se limitando a, textos, gráficos, logos e software, é de nossa propriedade ou de nossos licenciadores e é protegido por leis de direitos autorais e outras leis de propriedade intelectual.",
      },
      {
        title: "5. Alterações nos Termos",
        content:
          "Reservamo-nos o direito de modificar ou substituir estes termos a qualquer momento. O uso continuado do serviço após a publicação de quaisquer alterações constitui aceitação desses novos termos.",
      },
    ],
  },
  privacy: {
    title: "Política de Privacidade",
    sections: [
      {
        title: "1. Coleta de Informações",
        content:
          "Coletamos informações que você nos fornece diretamente ao criar uma conta, como nome e endereço de e-mail. Também podemos coletar dados de uso do jogo automaticamente.",
      },
      {
        title: "2. Uso das Informações",
        content:
          "Utilizamos as informações para operar, manter e fornecer os recursos do jogo, bem como para nos comunicarmos com você sobre atualizações, promoções e suporte ao cliente.",
      },
      {
        title: "3. Compartilhamento de Informações",
        content:
          "Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para operar o serviço (como provedores de hospedagem) ou quando exigido por lei.",
      },
      {
        title: "4. Segurança",
        content:
          "Tomamos medidas razoáveis para proteger suas informações contra perda, roubo, uso indevido e acesso não autorizado. No entanto, nenhum sistema de segurança é impenetrável.",
      },
      {
        title: "5. Seus Direitos",
        content:
          "Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento através das configurações da sua conta ou entrando em contato conosco.",
      },
    ],
  },
};

export default function FormsPageGame() {
  return (
    <Container className="bg-green-100">
        <SectionRegistro className="bg-green-600" />

        <Form adress='/cadastrese' className="py-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormRegistro />
            <InputText id="cpf" className="registro">CPF</InputText>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">DADOS DA SUA EQUIPE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">
                  Qual será o nome da sua equipe?
                </label>
                <input type="text" className="w-full mt-1 p-2 border rounded" required />
              </div>
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
                  <input type="radio" name="noticias" className="form-radio" required />
                  <span className="ml-2">NÃO</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">{legalInfo.terms.title}</h2>
            <div className="h-48 overflow-y-scroll border p-4 rounded-lg bg-gray-50">
              {legalInfo.terms.sections.map((section, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold">{section.title}</h3>
                  <p className="text-gray-600 text-sm">{section.content}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <label className="inline-flex items-center">
                <input type="checkbox" name="terms" className="form-checkbox" />
                <span className="ml-2">Eu li e aceito os Termos de Uso.</span>
              </label>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              {legalInfo.privacy.title}
            </h2>
            <div className="h-48 overflow-y-scroll border p-4 rounded-lg bg-gray-50">
              {legalInfo.privacy.sections.map((section, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold">{section.title}</h3>
                  <p className="text-gray-600 text-sm">{section.content}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="privacy"
                  className="form-checkbox"
                />
                <span className="ml-2">
                  Eu li e aceito a Política de Privacidade.
                </span>
              </label>
            </div>
          </div>

          <div className="mt-9 text-center">
            <button
              type="submit"
              className="bg-purple-500 text-white py-3 px-15 rounded-full text-lg font-bold hover:bg-green-600"
            >
              ENVIAR
            </button>
          </div>
        </Form>
    </Container>
  );
}
