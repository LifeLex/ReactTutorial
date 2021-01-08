import BlogList from './BlogList'
import { useState, useEffect } from 'react'

const Home = () => {
    const [name, setName] = useState('mario')
    const [blogs, setBlogs] = useState([
        {title:'Test', body: 'lorem ipsum', author:'test author', id:1},
        {title:'Test2', body: 'lorem ipsum', author:'test author2', id:2},
        {title:'Test3', body: 'lorem ipsum', author:'test author3', id:3},

    ]);
    const handleDelete = (id) => {
       const newBlogs = blogs.filter((blog)=>blog.id !== id)
       setBlogs( newBlogs );    
       
    }
    useEffect(() => {
      console.log('use effect run')
      console.log(name)
    }, [name])
    
   
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=>blog.author==='test author')} title='Test Blogs' handleDelete={handleDelete}/>
            <button onClick={()=> setName('luigi')}>Change name</button>
            <p>{name}</p>
        </div> 
    );
}
 
export default Home;