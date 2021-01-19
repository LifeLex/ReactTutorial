import BlogList from './BlogList'
import { useState, useEffect } from 'react'
import useFetch from './useFetch';

const Home = () => {
    //const [name, setName] = useState('mario')

    // const handleDelete = (id) => {
    //    const newBlogs = blogs.filter((blog)=>blog.id !== id)
    //    setBlogs( newBlogs );    
       
    // }
    const{data, isPending, error} = useFetch('http://localhost:8000/blogs')
    
   
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            {/* Logical and */}
            {data && <BlogList blogs={data} title='All blogs' />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='test author')} title='Test Blogs' handleDelete={handleDelete}/> */}
            {/* <button onClick={()=> setName('luigi')}>Change name</button> */}
            {/* <p>{name}</p> */}
        </div> 
    );
}
 
export default Home;