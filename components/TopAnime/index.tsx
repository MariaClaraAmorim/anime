import { Inter } from "@next/font/google";
import { Header } from "components/Header";
import Image from "next/image";
import Link from "next/link";
import css from "./styles.module.css";
const inter = Inter({ subsets: ["latin"] });

export default async function TopAnime() {
  
  const result = await getTopAnimes();

  return (
    <main>
      <Header />
      <div className={css.button}>
        <Link href={"/"}>
          <button className={css.btnTopAnime}>Ver todos</button>
        </Link>
      </div>

      <div className={css.container}>
        {result.map((anime) => (
          <div key={anime.id}>
            <div className={css.box}>
              <Link href={`/anime/${anime.id}/`}>
                <Image
                  className={css.imgAnime}
                  src={anime.images.large}
                  alt={anime.title}
                  width={350}
                  height={200}
                />
              </Link>
              <p className={css.title}>
                {anime.title} - {anime.japaneseTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

interface AnimeResponseDTO {
  mal_id: number;
  title: string;
  title_japanese: string;
  images: {
    webp: {
      image_url: string;
      large_image_url: string;
    };
  };
  episodes: number;
}

interface Anime {
  id: number;
  title: string;
  japaneseTitle: string;
  images: {
    large: string;
    tiny: string;
  };
  episodes: number;
}

const API_URL = process.env.NEXT_PUBLIC_API;

async function getTopAnimes(): Promise<Anime[]> {
  const response = await fetch(`${API_URL}/top/anime`);

  const json = await response.json();

  const result = json as { data: AnimeResponseDTO[] };

  return result.data.map((anime) => ({
    id: anime.mal_id,
    title: anime.title,
    japaneseTitle: anime.title_japanese,
    images: {
      large: anime.images.webp.large_image_url,
      tiny: anime.images.webp.image_url,
    },
    episodes: anime.episodes,
  }));
}
