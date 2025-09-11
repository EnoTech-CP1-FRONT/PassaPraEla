// src/components/sections/Curiosidades.jsx
import Card from "../common/Card";
import curiosidadeImg from "../../assets/curiosidades.png"; // Coloque a imagem correspondente aqui

export default function Curiosidades() {
  return (
    <section>
      <Card className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">| Curiosidades</h2>
        <div className="flex justify-center items-center">
          <img
            src={curiosidadeImg}
            alt="Primeiro time oficial de futebol feminino"
            className="relative object-cover"
          />
        </div>
        <div className="">
          <h3 className="font-bold text-[1.5rem] text-3 ">
            PRIMEIRO TIME OFICIAL
          </h3>
          <p className="text-lg">
            Formado no final da década de 1970, foi um dos primeiros times
            oficiais do Brasil. Ele formou a base da primeira Seleção Brasileira
            Feminina, em 1988.
          </p>
        </div>
      </Card>
    </section>
  );
}
