import BlogList from "./BlogList";
import useFetch from "./useFetch";
import React from "react";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { error && <div> { error.message } </div> }
            { isPending && <div> Loading... </div> }
            { blogs && <BlogList blogs={blogs} title='All blogs' /> }
        </div>
     );
}
 
export default Home;

//#17 - async not to be used in useEffect --?
