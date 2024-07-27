import React, { useEffect,useState } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

const News=({setProgress,apiKey,pageSize='9',country='in',category='general'})=> {
    const[articles,setArticles]=useState([])
    const[loading,setLoading]=useState(true)
    const[page,setPage]=useState(1)
    const[totalResults,setTotalResults]=useState(0)
    const capitalizeFirstLetter=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
    }

    const updateNews=async()=>{
      setProgress(25);
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
      setLoading(true);
      let data=await fetch(url);
      setProgress(50);
      let parsedData=await data.json();
      setProgress(75);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      setProgress(100);
    };
    useEffect(()=>{
      document.title=`BEE NEWS ${capitalizeFirstLetter(category)}`;
      updateNews();
      //eslint-disable-next-line
    },[]);

  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`;
    setPage(page+1);
    let data=await fetch(url);
    let parsedData=await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
    
    return (
      <>
        <div className="container my-2">
        <h1 className='text-center' style={{marginTop:'5rem'}}>BEE NEWS - Top {capitalizeFirstLetter(category)} Headlines</h1>
        </div>
        {loading && <Loading/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={!(page + 1 > Math.ceil(totalResults/pageSize))}
          loader={!loading && <Loading/>}
        >
        <div className="container my-2">
        <div className='row my-3'>
        {articles.map((element)=>{
            return <div className='col-md-4'  key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
        })}     
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }




export default News