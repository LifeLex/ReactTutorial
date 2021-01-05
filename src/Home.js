import { useState } from 'react'

const Home = () => {
    //let name = 'Me'
    const [blogs, setBlogs] = useState([
        {title:'Test', body: 'lorem ipsum', author:'test author', id:1}
    ]);
    const [name,setName]=useState('Me');
    const [age,setAge]=useState(25);
    const handleClick = (e) => {
        setName('you')
        setAge(30)
        console.log( name, age)
    }
    const handleClickWithParameters = (name,e) => {
        console.log('Hello world'+ name, e.target)
    }
    

    return ( <div className="home">
        <h2>Home Page</h2>
        <p>{name} is {age} old</p>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e)=>handleClickWithParameters('Test Name',e)}>Click Me Parameters</button>
    </div> 
    );
}
 
export default Home;