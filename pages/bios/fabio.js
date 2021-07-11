import Layout from "../../components/layout";
import Identity from "../../components/bio/identity";
import Project from "../../components/project/project";
import utilStyles from "../../styles/utils.module.css";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMask,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FabioBio() {
  const name = "Fabio";
  const description = `\t New in development world, Bachelor in Sports Cience, trying to speedrun on all kinds of develpment.\n
    \t Learning some ReactJs, NextJs, .NET, Laravel and RPA with selenium and pyAutoGUI.\ `;


  const blob = {
    summary: {
      abstract: "Cheat Sheet",
      tech: "NextJS",
    },
    title: "Blob",
    description:
      "Compendium for useful and personal information about me and some colleagues.",
  };
  const zeroToHero = {
    summary: {
      abstract: "Cheat Sheet",
      tech: "All",
    },
    title: "Zer0 to HerO",
    description:
      "The speedrun itself, let's see how much time I take to get hired as a senior dev, knowing i've touched my first code on february 2021",
  };

  return (
    <Layout>
      <section>
        <contact>
          <a href="https://www.linkedin.com/in/fabiomartinsp/">
            <FontAwesomeIcon className="socialMediaIcon" icon={faLinkedin} />
            Fábio Martins
          </a>
          <a href="https://github.com/Fabiomartinsp94">
            <FontAwesomeIcon className="socialMediaIcon" icon={faGithub} />
            fabiomartinsp94
          </a>
          <a href="mailto:fabiomartins.p@gmail.com">
            <FontAwesomeIcon className="socialMediaIcon" icon={faEnvelope} />
            fabiomartins.p@gmail.com
          </a>
        </contact>
      </section>

      <Identity name={name} description={description}></Identity>

      <section>
        <h1 className={utilStyles.liner}>Projects</h1>
        <div className={utilStyles.withLink}>
          <a href="/">
            <FontAwesomeIcon className="socialMediaIcon" icon={faPlayCircle} />
          </a>
          <Project project={blob}></Project>
        </div>
        
        <div className={utilStyles.withLink}>
          <a href="/">
            <FontAwesomeIcon className="socialMediaIcon" icon={faMask} />
          </a>
          <Project project={zeroToHero}></Project>
        </div>
      </section>
    </Layout>
  );
}
