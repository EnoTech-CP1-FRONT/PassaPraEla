import ImagemDeFundo1 from "../assets/imagemDeFundo.png";
import QuadradoRoxo from "../core-components/QuadradoRoxo";
import TituloPrincipal from "../core-components/TituloPrincipal";
import ProximosJogos from "../components/sections/ProximosJogos";
import Destaques from "../components/sections/Destaques";
import Curiosidades from "../components/sections/Curiosidades";
import Historia from "../components/sections/Historia";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Canais from "../components/sections/Canais";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section
        style={{
          backgroundImage: `url(${ImagemDeFundo1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <QuadradoRoxo />
        <Header />
        <TituloPrincipal />
      </section>
      <section className="bg-gray-100">
        <ProximosJogos />
        <div className="max-w-6xl mx-auto flex justify-between gap-8 px-6 md:px-10 py-12 ml-20 mr-20">
          <Destaques />
          <Curiosidades />
        </div>
        <Historia />
        <Canais />
      </section>
      <Footer />
    </div>
  );
}
