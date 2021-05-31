import Image from "next/image";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

import {
  faLinkedin,
  faGithub,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Bios() {
  const names = ["Guilherme", "Fabio", "Juliane"];

  return (
    <Layout>
      <section>
        <h1 className={utilStyles.liner}>Who we are</h1>
      </section>
      {names.map(function (name) {
        return (
          <a href={`/bios/${name.toLowerCase()}`} className="card">
            <Image
              priority
              src={`/images/profile/${name.toLowerCase()}.jpg`}
              className={utilStyles.borderCircle}
              height={200}
              width={200}
              objectFit="cover"
            />
            <h3 className={utilStyles.headingLg}>{name}</h3>
            <div>
              <FontAwesomeIcon className="socialMediaIcon" icon={faLinkedin} />
              <FontAwesomeIcon className="socialMediaIcon" icon={faGithub} />
            </div>
          </a>
        );
      })}
    </Layout>
  );
}
