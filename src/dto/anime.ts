export interface AnimeResponseDTO {
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
  duration?: string;
  favorites?: number;
  year?: number;
  synopsis?: string;
  title_synonyms?: string[];
  trailer?: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };
}

export interface Anime {
  id: number;
  title: string;
  title_japanese: string;
  images: {
    large: string;
    tiny: string;
  };
  episodes: number;
  duration?: string;
  favorites?: number;
  year?: number;
  synopsis?: string;

  trailer?: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };
}
