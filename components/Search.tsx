import styles from "../styles/search.module.css";
import { FaSearch } from "react-icons/fa";

export default function Search({
  query,
  setQuery,
  handleKeyDown,
  searchArtists,
}: any) {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.searchTerm}
            placeholder="Search for an artist..."
          />
          <button
            className={styles.searchButton}
            type="submit"
            onClick={searchArtists}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
