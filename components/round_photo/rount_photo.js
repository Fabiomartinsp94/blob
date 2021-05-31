import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import styles from "./round_photo.module.css";

export default function Photo({ names }) {
  return (
    <div className={utilStyles.homePhotos}>
      {names.map(function (name) {
        return (
          <div className={styles.singlePhoto}>
            <a href={`/bios/${name.toLowerCase()}`}>
              <Image
                priority
                src={`/images/profile/${name.toLowerCase()}.jpg`}
                className={utilStyles.borderCircle}
                height={200}
                width={200}
                objectFit="cover"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}
