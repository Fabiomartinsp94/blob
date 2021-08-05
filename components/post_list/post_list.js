import Post from "../post/post";
import utilStyles from "../../styles/utils.module.css";
import Link from 'next/link'

export default function PostsList({ data, slice = null}) {
    if (slice != null) {
        data = data.slice(0, slice)
    }
    
    return (
        <ul className={utilStyles.list}>
        {data.map(({ id, date, title, author, description }) => (
            <li className={utilStyles.withLink}>
                <Link href={`/posts/${id}`}>
                <a>
                <Post date={date} title={title} author={author} description={description}></Post>
                </a>
                </Link>
            </li>
        ))}
        </ul>
    );
}