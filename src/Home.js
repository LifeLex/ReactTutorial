import BlogList from './BlogList'
import { useState } from 'react'

const Home = () => {
    //let name = 'Me'
    const [blogs, setBlogs] = useState([
        {title:'Test', body: 'lorem ipsum', author:'test author', id:1},
        {title:'Test2', body: 'lorem ipsum', author:'test author', id:2}
    ]);


    return ( 
        <div className="home">
            <BlogList blogs={blogs}/>
        </div> 
    );
}
 
export default Home;