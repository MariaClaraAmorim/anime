import { Comments } from "components/Comments";
import { Testimony } from "components/Testimony";

export default async function commentsPage() {
  const result = await getSearch();
  return (
    <>
      <Comments />
      <Testimony />
    </>
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

async function getSearch(): Promise<Anime[]> {
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
