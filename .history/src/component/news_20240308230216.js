import React, { useEffect } from 'react'

const News = () => {
    const [news , setnews] = useState([]);
    const fetchData = async() =>{
        let resonse= await fetch( "https://newsapi.org/v2/top-headlines?country=us&apiKey=c147315bcfe54a3cbbda7f1c80227f43")
        let data = await resonse.json();
       
    }  
    console.log(news)
    useEffect(() => {
        fetchData();

    },[])
  return (
     {
        news.map((ele) =>{
        
            return(
                <>
                <div class="card" style={{width: "18rem"}}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
                </>
            )

        })
     }

   
  )
}

export default News
