import BlogList from "./BlogList";
import useFetch from "./useFetch";
import React from "react";
import { config } from "./config";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch(config.blog_server);

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
