import ImagemDeFundo1 from "../assets/imagemDeFundo.png";
import QuadradoRoxo from "../core-components/QuadradoRoxo";
import TituloPrincipal from "../core-components/TituloPrincipal";
import ProximosJogos from "../components/sections/ProximosJogos";
import Destaques from "../components/sections/Destaques";
import Curiosidades from "../components/sections/Curiosidades";
import Historia from "../components/sections/Historia";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import LogoSpotify from "../assets/icons/spotify-logo-fill.svg?react"
import LogoYoutube from "../assets/icons/youtube-logo-fill.svg?react";
import Icon from "../components/common/Icon";
import ImgPodcast from "../assets/podcasPassaABola.png"
import YoutubePassaABola from "../assets/youtubeTri.png"

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
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 md:px-10 py-12">
                    <Destaques />
                    <Curiosidades />
                </div>
                <Historia />
                <div className="flex  mt-20 m-10 text-center  justify-center">
                    <article className="flex-col">
                        <div className="flex text-center items-center">
                            <Icon svg={LogoSpotify} className="fill-2"/>
                            <h2>Spotify</h2>
                        </div>
                        <img src={ImgPodcast} className=""/>
                    </article>
                    <article className="flex-col">
                        <div className="flex text-center items-center">
                            <Icon svg={LogoYoutube} className="fill-red-600"/>
                            <h2>YouTube</h2>
                        </div>
                        <img src={YoutubePassaABola} alt="Podcast Passa A Bola" className="w-200"/>
                    </article>

                </div>
            </section>
            <Footer />
        </div>
    )
}