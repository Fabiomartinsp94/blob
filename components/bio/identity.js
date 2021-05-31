import styles from "./identity.module.css";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

export default function Identity({ name, description }) {
  return (
    <div>
      <section>
        <h1 className={utilStyles.liner}>{name}</h1>
      </section>
      <div className={styles.identity}>
        <p>
          <img className={styles.image} src={`/images/profile/${name}.jpg`} />
          {description}
        </p>
      </div>
    </div>
  );
}
