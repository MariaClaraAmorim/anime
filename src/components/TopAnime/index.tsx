"use client"
import { Anime } from "@dto/anime";
import { Inter } from "@next/font/google";
import { getAnimes } from "@services/anime";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import css from "./styles.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function TopAnime() {
  const [animes, setAnimes] = useState<Anime[]>([]);

  const getAnimeInformation = useCallback(async () => {
    const response = await getAnimes();

    setAnimes(response);
  }, []);

  useEffect(() => {
    getAnimeInformation();
  }, [getAnimeInformation]);


  return (
    <main>
      {/* <Header /> */}
      <div className={css.button}>
        <Link href={"/"}>
          <button className={css.btnTopAnime}>Ver todos</button>
        </Link>
      </div>

      <div className={css.container}>
        {animes.map((anime) => (
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
                {anime.title} - {anime.title_japanese}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
