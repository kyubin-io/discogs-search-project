import styles from "../styles/search.module.css";
import { FaSearch } from "react-icons/fa";

type Props = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  onSearch: () => Promise<void>;
};

export default function Search({
  query,
  setQuery,
  onKeyDown,
  onSearch,
}: Props) {
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <form className={styles.search} onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            className={styles.searchTerm}
            placeholder="Search for an artist..."
          />
          <button
            className={styles.searchButton}
            type="submit"
            onClick={onSearch}
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
}
