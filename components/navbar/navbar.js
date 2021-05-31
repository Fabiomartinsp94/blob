import styles from "./navbar.module.css";
import Link from "next/link";

import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.content}>
          <div className={styles.home}>
            <Link href="/">
              <a>
                <span>
                  <FontAwesomeIcon icon={faTerminal} />
                </span>
                /home
              </a>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/bios">
              <a>
                <span>
                  <FontAwesomeIcon icon={faTerminal} />
                </span>
                /bios
              </a>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/posts">
              <a>
                <span>
                  <FontAwesomeIcon icon={faTerminal} />
                </span>
                /posts
              </a>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/contact">
              <a>
                <span>
                  <FontAwesomeIcon icon={faTerminal} />
                </span>
                /contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
