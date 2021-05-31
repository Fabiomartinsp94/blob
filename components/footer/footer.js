import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <Image
          priority
          src={`/blob.png`}
          height={35}
          width={90}
          alt="logo"
          objectFit="fill"
        />
      </div>
    </div>
  );
}
