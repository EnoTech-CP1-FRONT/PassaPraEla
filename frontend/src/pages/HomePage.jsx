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
import NoticiasFutebol from "../components/common/New";
import ApiNoticia from "../components/api/ApiNoticia"

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
        <NoticiasFutebol />
        <ProximosJogos />
        <div className="max-w-6xl mx-auto flex max-lg:flex-col justify-center gap-8 mb-20">
          <ApiNoticia></ApiNoticia>
        </div>
        <Historia />
        <Canais />
      </section>
      <Footer />
    </div>
  );
}
