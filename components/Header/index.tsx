import css from "./styles.module.css";

import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";


interface AnimeSearchDTO {
  mal_id: number,
  title: string,
  url: string,
  image_url: string,
  type: string,
}

function Header() {

  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <input className={css.searchInput} type="text" />

          <button className={css.bsSearch}>
            <BsSearch />
          </button>
        </div>

        <Link href={"/gerador-anime"}>
          <button className={css.btnGerador}>Gerador de Anime</button>
        </Link>
      </div>
    </>
  );
}

export { Header };
