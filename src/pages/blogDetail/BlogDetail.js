import './BlogDetail.css'
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch(process.env.CONNECTION + "/blogs/" + blog.id, {
            method:'DELETE'
        }).then(() => {
            navigate('/home');
        })
    }

    return (
        <div className="blog-details">
            <div>
                <h2>Blog Details</h2>
                { isPending && <div>Loading...</div>}
                { error && <div>{ error }</div>}
                { blog && (
                    <article>
                        <h2>{ blog.title}</h2>
                        <p>By { blog.author }</p>
                        <div>{ blog.body }</div>
                        <button onClick={handleClick}>delete</button>
                    </article>
                )}
            </div>
        </div>
    )

}

export default BlogDetail;