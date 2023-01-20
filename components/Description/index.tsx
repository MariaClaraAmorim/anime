import Image from "next/image";
import Link from "next/link";
import css from "./styles.module.css";

async function Description() {
  const result = await getDescriptionAnime();
  return (
    <>
      <div className={css.container}>
        <div className={css.box}>
          {result.map((anime) => (
            <div key={anime.id}>
              <div className={css.box}>
                <Image
                  className={css.imgAnime}
                  src={anime.images.large}
                  alt={anime.title}
                  width={350}
                  height={200}
                />
                <p className={css.title}>
                  {anime.title} - {anime.japaneseTitle}
                </p>

                <p className={css.title}>Sinopse: {anime.synopsis} </p>
                <p className={css.title}>Duração: {anime.duration} </p>
                <p className={css.title}>Favoritado: {anime.favorites} </p>
                <p className={css.title}>Lançamento: {anime.year} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { Description };

interface AnimeResponseDTO {
  mal_id: number;
  title: string;
  title_japanese: string;
  duration: string;
  favorites: number;
  year: number;

  images: {
    webp: {
      image_url: string;
      large_image_url: string;
    };
  };
  episodes: number;
  synopsis: string;
}

interface Anime {
  id: number;
  title: string;
  japaneseTitle: string;
  duration: string;
  favorites: number;
  year: number;

  images: {
    large: string;
    tiny: string;
  };
  episodes: number;
  synopsis: string;
}

const API_URL = process.env.NEXT_PUBLIC_API;

async function getDescriptionAnime(): Promise<Anime[]> {
  const response = await fetch(`${API_URL}/anime/`);
  // https://api.jikan.moe/v4/anime/{id}/full

  const json = await response.json();

  const result = json as { data: AnimeResponseDTO[] };

  return result.data.map((anime) => ({
    id: anime.mal_id,
    title: anime.title,
    japaneseTitle: anime.title_japanese,
    duration: anime.duration,
    favorites: anime.favorites,
    year: anime.year,

    images: {
      large: anime.images.webp.large_image_url,
      tiny: anime.images.webp.image_url,
    },
    episodes: anime.episodes,
    synopsis: anime.synopsis,
  }));
}
