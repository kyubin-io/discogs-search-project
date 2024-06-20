"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/releases.module.css";
import PaginationButtons from "./PaginationButtons";
import { getReleases } from "@/app/api/routes";
import { PER_RELEASE_PAGE } from "@/lib/constants";

type Release = {
  id: number;
  title: string;
  thumb: string;
  type: string;
  year: string;
};

export default function Releases({ id }: { id: number }) {
  const [releases, setReleases] = useState<Release[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchReleases = async () => {
    try {
      const result = await getReleases(id, page);
      setReleases(result.releases);
      setTotalPages(result.pagination?.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchReleases();
  }, [page]);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.ul}>
        {releases?.map((release: Release) => (
          <li key={release.id}>
            <Link
              href={`/${release.type === "master" ? "masters" : "releases"}/${
                release.id
              }`}
              className={styles.release}
              title={release.title}
            >
              <Image
                width={200}
                height={200}
                src={release.thumb}
                alt={release.title}
              />
              <span className={styles.title}>{release.title}</span>
              <span className={styles.year}>{release.year}</span>
            </Link>
          </li>
        ))}
      </ul>
      {totalPages > PER_RELEASE_PAGE && <PaginationButtons setPage={setPage} />}
    </div>
  );
}
