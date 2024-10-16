import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import App from '../App'
import axios from 'axios'
const Example = ({category}) => {
    
    const[data,setData] = useState([])
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=47c3e72523ed47129efc9755cdff16a6`)
        .then(response => response.json())
        .then(data => setData(data.articles))
        .catch(error => console.log(error))
    },[category])
    console.log(data)
    
    //  useEffect(() => {
    //     fetchData()
    //  },[])
    //  const [articles,setarticles] = useState([])
    //  const fetchData = async () => {
    //      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=47c3e72523ed47129efc9755cdff16a6')
    //      if(response){
    //          const data = await response.json()
    //          setarticles(data.articles)
    //      }
    //  }

  return (
    <div className='container-fulid' style={{ marginLeft : '100px'}}>
      <h1>API <span class="badge bg-denger"></span></h1>
      {data.map((item,index) => {
        return(
            <div key={index} className='card bg-dark text-light mb-3 ' >
                <img src={item.urlToImage} className="card-img-top" alt="..." onClick={() => window.open(item.url)} />
                <div className="card-body">
                    <h1 className='card-title'>{item.author}</h1>
                    <h5 className="card-title">{item.title}</h5>
                    <p className='card-text'>{item.publishedAt}</p>
                    <p className="card-text">{item.description}</p>
                    <a href={item.url} className="btn btn-primary" class="button-29" role="button">Go somewhere</a>
                </div>
                
            </div>
        )
    })}
    </div>
  )
}

export default Example
