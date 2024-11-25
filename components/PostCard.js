import Link from "next/link";

export default function PostCard(props) {
    const { post } = props
    console.log(post)
    return (
        <Link className="unstyled" href={`/archive/${post.slug}`}>
            <div className="postCard">
                <h3>{post.title}</h3>
                {/* <p>{post.dateAt}</p> */}
                <div className="statsContainer">
                    <div>
                        <h5>Date:</h5>
                        <p>{post.date}</p>
                    </div>

                </div>
            </div>
        </Link>
    )
}
