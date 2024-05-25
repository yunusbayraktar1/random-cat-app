import {useState} from 'react'

const Main = () => {
    const [imgUrl,setImgUrl] = useState("");

   const CallImg = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(result=>result.json())
    .then(data=>setImgUrl(data[0].url))
   }

return (

    
    <div className='container'>
        <div className='box'>
            <h2>Enjoy the kittie</h2>
            <img src={imgUrl}/>
            <button onClick={()=>CallImg()}>Click Me</button>        
        </div>
    </div>
    
)
}

export default Main