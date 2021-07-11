import styles from "./post.module.css";

export default function Post({ date, author, title, description }) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <p>{date}</p>
        <p>-</p>
        <p>{author}</p>
      </div>
      <div className={styles.postTitle}>
        <p>{title}</p>
      </div>
      <div className={styles.postDescription}>{description}</div>
    </div>
  );
}
