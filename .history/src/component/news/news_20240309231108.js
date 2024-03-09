import React, { useEffect, useState } from 'react'
import "./News.css"
const News = () => {
    const [lnews , setnews] = useState([]);
    const fetchData = async() =>{
        let resonse= await fetch( "https://newsapi.org/v2/top-headlines?country=us&apiKey=c147315bcfe54a3cbbda7f1c80227f43")
        let data = await resonse.json();
        setnews(data.articles)
    console.log(resonse.status)
    console.log(resonse.body)
    console.log(data)
    console.log(data.articles)
    console.log(data.totalResults)

    


       
    }  
    useEffect(() => {
        fetchData();

    },[])
  return (  
    <div>
   <div className='mainDiv'>
    {lnews.map( (e) => {
      console.log(Element)
     return(
   <>
  
                 < div class="card" style={{width: "350px", height:"300px" , marginLeft:"7.1rem", marginTop: "2rem"}}>
                 
                <img src={e.urlToImage==null ? "https://media.cnn.com/api/v1/images/stellar/prod/240307231204-31-week-in-photos-030724.jpg?c=16x9&q=w_800,c_fill":e.urlToImage } class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{e.author==null? "Graham Kates":e.author}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  {e.title}
                  <a href={e.url}  target=" blank"class="btn btn-primary">Go somewhere</a>
                </div> </div>
              
  

                </>


     )
     } 
    )
    
}
</div>
  </div>
  ) 
}
export default News
