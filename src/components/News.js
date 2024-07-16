import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state={
            articles: [],
            loading: true,
            page:1
        }
    }
    handleNextClick=()=>{
        this.setState({page:2});
    }
    handlePrevClick=()=>{
        this.setState({page:1});
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=429348170a234edf8d313236f6579cfd&page=${this.page}`;
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles});
    }
    
  render() {
    return (
      <div className='container my-4'>
        <h1>Top Headlines</h1>
        <div className='row my-3'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4'>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}     
        </div>
        <div className="container my-4">
        <div className="d-flex mb-3">
  <div className="p-2">
  <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
  </div>
  <div className="ms-auto p-2">
    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
    </div>
</div>
        
        
        </div>
      </div>
    )
  }
}

export default News