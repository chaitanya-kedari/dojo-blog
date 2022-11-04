import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('https://kc-fitness-app-server.herokuapp.com/blogs/' + id)
    
    const history = useHistory();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method:'DELETE'
        }).then(() => {
            setIsSubmitting(true);
            setTimeout(history.push('/'), 10000);
        })
    }

    return (
        <div className="blog-details">
            { error && <div>{ error }</div>}
            { isPending && <div> Loading... </div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>  
                    <p> written by { blog.author }</p>       
                    <div>{ blog.body }</div>
                </article>
            )}
            <button onClick={handleClick}>Delete</button>
            { isSubmitting && <div>Blog deleted \n Redirecting to home page</div> }
        </div>
    );
}
 
export default BlogDetails;