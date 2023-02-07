import { Anime, AnimeResponseDTO } from "@dto/anime";

const API_URL = process.env.NEXT_PUBLIC_API;

function isAnimeResponseDTO(data: unknown): data is { data: AnimeResponseDTO } {
  if (!data) return false;
  if (typeof data !== "object") return false;
  if ("data" in data) {
    if (typeof data.data !== "object") return false;
  }

  return true;
}

function isAnimeArrayResponseDTO(
  data: unknown
): data is { data: AnimeResponseDTO[] } {
  if (!data) return false;
  if (typeof data !== "object") return false;
  if ("data" in data) {
    if (!Array.isArray(data.data)) return false;
  }

  return true;
}

function animeDefault(anime: AnimeResponseDTO): Anime {
  return {
    id: anime.mal_id,
    title: anime.title,
    title_japanese: anime.title_japanese,
    duration: anime.duration,
    favorites: anime.favorites,
    year: anime.year,

    images: {
      large: anime.images.webp.large_image_url,
      tiny: anime.images.webp.image_url,
    },
    episodes: anime.episodes,
    synopsis: anime.synopsis,
  };
}

async function getAnimes(topAnimes?: boolean): Promise<Anime[]> {
  try {
    const addParamTop = topAnimes ? "/top" : "";

    const response = await fetch(`${API_URL}${addParamTop}/anime`);

    const json = await response.json();

    const result = isAnimeArrayResponseDTO(json) ? json : { data: [] };

    return result.data.map((anime) => animeDefault(anime));
  } catch (error) {
    console.log("Error: ", error);

    return [];
  }
}

async function getAnime(id: string) {
  try {
    const malID = id.replace(/\D/g, "");

    const response = await fetch(`${API_URL}/anime/${malID}`);

    const json = await response.json();

    if (isAnimeResponseDTO(json)) {
      return animeDefault(json.data);
    }

    throw new Error("Anime não encontrado! :/");
  } catch (error) {
    console.log("Error: ", error);
  }
}

export { getAnimes, getAnime };
