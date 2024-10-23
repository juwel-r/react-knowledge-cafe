import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('knowledgeCafe.json')
        .then(res=> res.json())
        .then(data => setPosts(data))
    },[])
    console.log(posts)
    return (
        <div>
            <div>
                {
                    posts.map(post => )
                }
            </div>
        </div>
    );
};

export default Blogs;