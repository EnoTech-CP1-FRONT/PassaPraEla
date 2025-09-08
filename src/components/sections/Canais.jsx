import LogoSpotify from "../../assets/icons/spotify-logo-fill.svg?react";
import LogoYoutube from "../../assets/icons/youtube-logo-fill.svg?react";
import Icon from "../common/Icon";
import ImgPodcast from "../../assets/podcasPassaABola.png";
import YoutubePassaABola from "../../assets/youtubeTri.png";
import LinePodcast from "../../assets/LinePodcast.png";
import LogoPlay from "../../assets/icons/play-fill.svg?react ";

export default function Canais() {
  return (
    <div className="flex gap-10 mt-20 m-10 text-center  justify-center text-[2.5rem]">
      <article className="flex-col">
        <div className="flex text-center items-center">
          <Icon svg={LogoSpotify} className="fill-2 " />
          <h2>Spotify</h2>
        </div>
        <div className="flex flex-col gap-8 justify-center p-10 bg-2">
          <img src={ImgPodcast} className="" />
          <div className="flex justify-between items-center">
            <div>
              <img src={LinePodcast} />
            </div>
            <Icon svg={LogoPlay} className="fill-4" />
          </div>
        </div>
      </article>
      <article className="flex-col">
        <div className="flex text-center items-center">
          <Icon svg={LogoYoutube} className="fill-red-600" />
          <h2>YouTube</h2>
        </div>
        <img
          src={YoutubePassaABola}
          alt="Podcast Passa A Bola"
          className="w-200"
        />
      </article>
    </div>
  );
}
