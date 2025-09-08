

export default function DadosLGPD() {
    return(
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
    )
}