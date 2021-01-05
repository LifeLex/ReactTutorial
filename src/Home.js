import { useState } from 'react'

const Home = () => {
    //let name = 'Me'
    const [blogs, setBlogs] = useState([
        {title:'Test', body: 'lorem ipsum', author:'test author', id:1},
        {title:'Test', body: 'lorem ipsum', author:'test author', id:2}
    ]);


    return ( 
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}

        </div> 
    );
}
 
export default Home;