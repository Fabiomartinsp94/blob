import Layout from "../../components/layout";
import Identity from "../../components/bio/identity";
import Project from "../../components/project/project";
import utilStyles from "../../styles/utils.module.css";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLock,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GuilhermeBio() {
  const name = "Guilherme";
  const description = `\tControl engineer graduated at UNICAMP, software developer and technology enthusiast.\
 I've spent most of time with full-stack development of web applications, created Infra-As-Code aplications for a financial institute and\
 currently working on a financial market software with Python and React, fully deployed on AWS.\n
\tAt the moment focusing on learning more about application monitoring, performance and software architecture, mainly\
 using cloud solutions. My mission is to be better every day and this means ask questions to solve not only my\
 actual problems, but to improve what i have already done.`;

  const alfredo = {
    summary: { abstract: "DevOps platform", tech: "Python/Django" },
    title: "Alfred.O",
    description:
      "Self made platform for scripting, connecting and troubleshooting\
    Unix systems, mostly used for IT and application support. The objective was to optimize time\
    executing scripts or commands on multiple legacy servers at the same time. Based on Paramiko's, Python library, and Django.",
  };

  const iaf = {
    summary: { abstract: "Ticket Manager", tech: "Python/Django" },
    title: "Infra As Code Gateway",
    description:
      "Asynchronous ticket manager for controlled server operations. 'Power to the Edge', the objective was giving server privileges\
       for develops to execute non-critical scripts and commands on production servers, reducing their SLA for support purposes.\
       A source of debugging and a way to monitor via dashboard their servers for developers at that time",
  };

  const smeg = {
    summary: {
      abstract: "CNN Model for sEMG signal prediction",
      tech: "Python/Keras",
    },
    title: "ANN with sEMG for Basic Hand movements",
    description:
      "Convolutional Neural Network built from scratch that achieved more than 96% precision rate at predicting hand positions\
      from two channel EMG sensors, regardless of the strength aplied.",
  };

  const lambda = {
    summary: {
      abstract: "Manager for serverless functions on AWS",
      tech: "Python/Boto3",
    },
    title: "Lambda Manager",
    description:
      "Python library developed for easy manage more than a hundred of Lambda functions with deprecated code\
      that needed upgrade.",
  };

  const django_api = {
    summary: {
      abstract: "API Standard Model",
      tech: "Python/Django/Knox",
    },
    title: "Django API Rest template",
    description:
      "Template REST API with authentication powered by Knox library.",
  };

  const blob = {
    summary: {
      abstract: "Cheat Sheet",
      tech: "NextJS",
    },
    title: "Blob",
    description:
      "Compendium for useful and personal information about me and some colleagues.",
  };

  const landing_page = {
    summary: {
      abstract: "Comercial Landing Page",
      tech: "React",
    },
    title: "Comercial Landing Page",
    description: "Comercial landing page for company partner.",
  };

  return (
    <Layout>
      <section>
        <contact>
          <a href="https://www.linkedin.com/in/guilherme-campiani-50753315b/">
            <FontAwesomeIcon className="socialMediaIcon" icon={faLinkedin} />
            Guilherme Campiani
          </a>
          <a href="https://github.com/gCampiani">
            <FontAwesomeIcon className="socialMediaIcon" icon={faGithub} />
            gCampiani
          </a>
          <a href="mailto:guilherme.campiani@gmail.com">
            <FontAwesomeIcon className="socialMediaIcon" icon={faEnvelope} />
            guilherme.campiani@gmail.com
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
          <a href="https://stone.adianta.com.br/">
            <FontAwesomeIcon className="socialMediaIcon" icon={faPlayCircle} />
          </a>
          <Project project={landing_page}></Project>
        </div>
        <div className={utilStyles.withLink}>
          <a href="https://github.com/gCampiani/sEMG-Analysis">
            <FontAwesomeIcon className="socialMediaIcon" icon={faGithub} />
          </a>
          <Project project={smeg}></Project>
        </div>
        <div className={utilStyles.withLink}>
          <a href="https://github.com/gCampiani/LambdaManager">
            <FontAwesomeIcon className="socialMediaIcon" icon={faGithub} />
          </a>
          <Project project={lambda}></Project>
        </div>
        <div className={utilStyles.withLink}>
          <a href="https://github.com/gCampiani/api_standard">
            <FontAwesomeIcon className="socialMediaIcon" icon={faGithub} />
          </a>
          <Project project={django_api}></Project>
        </div>
        <div className={utilStyles.withLink}>
          <a>
            <FontAwesomeIcon className="socialMediaIcon" icon={faLock} />
          </a>
          <Project project={alfredo}></Project>
        </div>
        <div className={utilStyles.withLink}>
          <a>
            <FontAwesomeIcon className="socialMediaIcon" icon={faLock} />
          </a>
          <Project project={iaf}></Project>
        </div>
      </section>
    </Layout>
  );
}
