import styles from "./project.module.css";

export default function Project({ project }) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectTitle}>
        <p>{project.title}</p>
      </div>
      <div className={styles.projectAbstract}>
        <p>{project.summary.abstract}</p>
        <p>-</p>
        <p>{project.summary.tech}</p>
      </div>
      <div className={styles.projectDescription}>{project.description}</div>
    </div>
  );
}
