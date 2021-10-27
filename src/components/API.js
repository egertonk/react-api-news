import React, { useState, useEffect } from 'react';
import APIHeader from './APIHeader';
import APIFooter from './APIFooter';
import 'bootstrap/dist/css/bootstrap.css';

function API() {
  const [Data,setData]=useState(null);
  const allData = [];

  var url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=5bacaabc352f4b9fb9e382a0b72cdbdd';
  var req = new Request(url);

  useEffect(() => {
      fetch(req)
        .then(resp => resp.json())
        .then(resp => {
          setData(resp)
        })
    }) 

    for (const property in Data) {
      const temp = Data[property];
      for (const propertyTwo in temp) {
        console.log("---------> " + temp[propertyTwo].title);
        if(temp[propertyTwo].title !== undefined)
        {
          allData.push(
            <>
              <div className='media'> 
              <img className="align-self-start mr-3" src={temp[propertyTwo].urlToImage} alt="News Photo"/>
              <div className="media-body"> 
                <h3 className="mt-0">{temp[propertyTwo].title}</h3>
                <p>{temp[propertyTwo].description}</p>
                <p>{temp[propertyTwo].content} <a href={temp[propertyTwo].url}>Read More</a></p>
                <p className="author"><h5>Authors: {temp[propertyTwo].author}</h5></p>
              </div>
              </div>
            </>
          );
        }

      }
    }

  return (
    <div className="container">
      <APIHeader />
      {allData}
      <APIFooter />
    </div>
  )
}

export default API

