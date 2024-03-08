import React, { useEffect } from 'react'

const News = () => {
    const fetchData =() =>{
        let resonse= fetch( "https://newsapi.org/v2/top-headlines?country=us&apiKey=c147315bcfe54a3cbbda7f1c80227f43")
        let data = resonse.json();
    }
    useEffect(() => {
        fetchData();

    },[])
  return (
    <div class="card" style={{width: "18rem"}}>
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default News
