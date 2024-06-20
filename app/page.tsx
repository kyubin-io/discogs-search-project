"use client";

import Search from "@/components/Search";
import { useEffect, useState } from "react";
import styles from "../styles/main.module.css";
import { CiSun } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import Artists from "@/components/Artists";
import { searchArtists } from "./api/routes";
import { PER_PAGE } from "@/lib/constants";

export type Artist = {
  id: number;
  title: string;
  thumb: string;
  type: string;
};

export default function Home() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const handleSearch = async () => {
    try {
      const results = await searchArtists(query, page, PER_PAGE);
      setArtists(results?.results);
      setTotalPages(results?.pagination?.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch();
    }
  }, [page]);

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <MdDarkMode />
        <h1 className={styles.title}>Discogs</h1>
        <h1 className={styles.title}>Artist Search</h1>
        <Search
          setQuery={setQuery}
          query={query}
          onKeyDown={handleKeyDown}
          onSearch={handleSearch}
        />
      </section>
      <Artists
        artists={artists}
        totalPages={totalPages}
        per_page={PER_PAGE}
        setPage={setPage}
      />
    </div>
  );
}
