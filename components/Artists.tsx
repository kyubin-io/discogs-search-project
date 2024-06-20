import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/artists.module.css";
import PaginationButtons from "./PaginationButtons";
import { Artist } from "@/app/page";
import UserPNG from "../public/img/user.png";

type ArtistsProps = {
  artists: Artist[];
  totalPages: number;
  per_page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Artists({
  artists,
  totalPages,
  per_page,
  setPage,
}: ArtistsProps) {
  console.log(artists);
  return (
    <section className={styles.section}>
      <ul className={styles.gridContainer}>
        {artists?.map((artist: Artist) => (
          <li key={artist.id}>
            <Link href={`/artist/${artist.id}`} className={styles.li}>
              <Image
                width={250}
                height={250}
                src={artist.thumb || UserPNG}
                alt={artist.title}
              />
              <span className={styles.title}>{artist.title}</span>
              <span className={styles.type}>{artist.type}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.paginationContainer}>
        {totalPages > per_page && <PaginationButtons setPage={setPage} />}
      </div>
    </section>
  );
}
