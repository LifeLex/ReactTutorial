import BlogList from './BlogList'
import { useState, useEffect } from 'react'

const Home = () => {
    //const [name, setName] = useState('mario')
    const [blogs, setBlogs] = useState(null);
    const handleDelete = (id) => {
       const newBlogs = blogs.filter((blog)=>blog.id !== id)
       setBlogs( newBlogs );    
       
    }
    useEffect(() => {
      fetch('http://localhost:8000/blogs')
        .then(res=>{
           return res.json();
        })
        .then((data)=>{
            setBlogs(data)
        })
    }, [])
    
   
    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete}/>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='test author')} title='Test Blogs' handleDelete={handleDelete}/> */}
            {/* <button onClick={()=> setName('luigi')}>Change name</button> */}
            {/* <p>{name}</p> */}
        </div> 
    );
}
 
export default Home;