// src/components/layout/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo-passa-a-bola.png"
              alt="Logo Passa a Bola"
              className="w-10 h-10"
            />
            <span className="font-bold text-xl">PASSA A BOLA</span>
          </div>
        </div>
        <div className="md:col-span-1">
          [cite_start]<h3 className="font-bold mb-2">Sobre nós [cite: 277]</h3>
          [cite_start]<h3 className="font-bold">contatos: [cite: 278]</h3>
          {/* Adicione informações de contato aqui */}
        </div>
        <div className="md:col-span-1 flex items-start justify-end">
          <button className="border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
            [cite_start]ENVIAR MENSAGEM [cite: 276]
          </button>
        </div>
      </div>
    </footer>
  );
}
