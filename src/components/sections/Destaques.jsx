// src/components/sections/Destaques.jsx
import Card from "../common/Card";
import { ArrowRight } from "lucide-react";
import destaqueImg from "../../assets/destaques.png";

export default function Destaques() {
  return (
    <section>
      <div className="flex items-center mb-4">
        <Card className="p-4">
          <div className="flex justify-between mb-4">
            <h2 className="relative text-xl font-bold text-gray-800">
              | Destaques
            </h2>
            <button>
              <ArrowRight className="text-gray-800" />
            </button>
          </div>

          <img
            src={destaqueImg}
            alt="Jogadoras do Paulistão Feminino"
            className="relative   object-cover"
          />
          <div className="p-4 ">
            <h3 className="font-bold text-3 text-[2rem] ">
              PAULISTÃO FEMININO
            </h3>
            <p className="text-lg">
              Ferroviária lidera após goleada na 1ª rodada, veja próximos jogos
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
