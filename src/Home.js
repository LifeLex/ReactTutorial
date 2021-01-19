import BlogList from './BlogList'
import { useState, useEffect } from 'react'

const Home = () => {
    //const [name, setName] = useState('mario')
    const [blogs, setBlogs] = useState(null);
    const[isPending, setIsPending]= useState(true);
    const[error, setError]= useState(null);
    const handleDelete = (id) => {
       const newBlogs = blogs.filter((blog)=>blog.id !== id)
       setBlogs( newBlogs );    
       
    }
    useEffect(() => {
      setTimeout(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>{
            if(!res.ok){
              throw Error("Could not fetch the date from that resource")      
            }
           return res.json();
        })
        .then((data)=>{
            setBlogs(data)
            setIsPending(false)
            setError(null);
        })
        .catch((err)=>{
            setError(err.message);
            setIsPending(false);
            console.log(err.message)
        })
      }, 1000)
    }, []);
    
   
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            {/* Logical and */}
            {blogs && <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete}/>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='test author')} title='Test Blogs' handleDelete={handleDelete}/> */}
            {/* <button onClick={()=> setName('luigi')}>Change name</button> */}
            {/* <p>{name}</p> */}
        </div> 
    );
}
 
export default Home;