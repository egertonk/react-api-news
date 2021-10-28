import React, { useState, useEffect } from 'react';
import APIHeader from './APIHeader';
import APIFooter from './APIFooter';
import 'bootstrap/dist/css/bootstrap.css';

function API() {
  const [Data,setData]=useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const allData = [];
  
  var url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=5bacaabc352f4b9fb9e382a0b72cdbdd';

  var req = new Request(url);
  
  // Note: the empty deps array [] means
  // this useEffect will run once
  useEffect(() => {
      fetch(req)
        .then(resp => resp.json())
        .then(resp => {
          setData(resp)
          setIsLoaded(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        })
    }, []) 
    
    if(error)
    {
      return <>
                <div className='media'> 
                <img className="align-self-start mr-3"  style={{backgroundColor: '#02898a' }}/>
                <div className="media-body"> 
                  {Data.message}
                </div>
                </div>
              </>;
    }
    else{
      for (const property in Data) {
        const temp = Data[property];
        for (const propertyTwo in temp) {
          if(temp[propertyTwo].title !== undefined)
          {
            allData.push(
              <>
                <div className='media'> 
                <img className="align-self-start mr-3" src={temp[propertyTwo].urlToImage} />
                <div className="media-body"> 
                  <h3 className="mt-0">{temp[propertyTwo].title}</h3>
                  <span>{temp[propertyTwo].description}</span>
                  <span>{temp[propertyTwo].content} <a href={temp[propertyTwo].url}>Read More</a></span>
                  <span className="author"><h5>Authors: {temp[propertyTwo].author}</h5></span>
                </div>
                </div>
              </>
            );
          }
  
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