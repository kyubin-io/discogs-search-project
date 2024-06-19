import styles from "../styles/button.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function PaginationButtons({ setPage }: Props) {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.button}
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      >
        <IoIosArrowBack />
      </button>

      <button
        className={styles.button}
        onClick={() => setPage((prev) => prev + 1)}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
