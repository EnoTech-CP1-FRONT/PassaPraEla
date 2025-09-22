
import { useCart } from "../context/CartContext";
import HeaderLoja from "../components/layout/HeaderLoja";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function CarrinhoDeCompras() {
  // Usando o hook para acessar os itens e funções do carrinho
  const { cartItems, addToCart, removeFromCart } = useCart();

  // Função para calcular o total de itens no carrinho
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Função para calcular o preço total
  const totalPrice = cartItems
    .reduce((sum, item) => {
      // Remove 'R$ ' e substitui ',' por '.' para converter para número
      const price = parseFloat(item.preco.replace("R$ ", "").replace(",", "."));
      return sum + price * item.quantity;
    }, 0)
    .toFixed(2); // Formata para 2 casas decimais

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeaderLoja />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Meu Carrinho ({totalItems} {totalItems === 1 ? "item" : "itens"})
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 mb-4">
              Seu carrinho está vazio.
            </p>
            <Link
              to="/loja"
              className="bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition-colors text-lg"
            >
              Ver produtos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de Itens */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white p-4 rounded-lg shadow-md"
                >
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="w-24 h-24 object-cover rounded-md mr-4"
                  />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{item.nome}</h2>
                    <p className="text-purple-700 font-bold">{item.preco}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeFromCart(item.id, true)}
                      className="px-3 py-1 border rounded"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-3 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-6 text-red-500 hover:text-red-700"
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>

            {/* Resumo do Pedido */}
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">
                Resumo do Pedido
              </h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal ({totalItems} itens)</span>
                <span>R$ {totalPrice.replace(".", ",")}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Frete</span>
                <span>Grátis</span>
              </div>
              <div className="flex justify-between font-bold text-xl border-t pt-4">
                <span>Total</span>
                <span>R$ {totalPrice.replace(".", ",")}</span>
              </div>
              <button className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
