import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function AboutInfo() {
    let { id } = useParams();
    let navigate = useNavigate();

    let [post, setPost] = useState([null]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [id]);

    let goBack = () => navigate(-1);

    return (
        <div className="content">
            {
                post && (
                    <>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button onClick={goBack}>Назад</button>
                    </>
                )
            }
        </div>
    )
}

export default AboutInfo;