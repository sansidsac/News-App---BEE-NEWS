import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';

export class News extends Component {

    constructor(){
        super();
        this.state={
            articles: [],
            loading: true,
            page:1
        }
    }

    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=429348170a234edf8d313236f6579cfd&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({
        articles:parsedData.articles,
        totalArticles:parsedData.totalResults,
        loading:false
      });
  }

    handleNextClick= async ()=>{
      if(!(this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=429348170a234edf8d313236f6579cfd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
          page: this.state.page+1,
          articles:parsedData.articles,
          loading:false
        });
      }
    }
    handlePrevClick= async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=429348170a234edf8d313236f6579cfd&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({
        page: this.state.page-1,
        articles:parsedData.articles,
        loading:false
      });
    }


    
  render() {
    return (
      <div className='container my-4'>
        <h1 className='text-center'>BEE NEWS - Top Headlines</h1>
        {this.state.loading && <Loading/>}
        <div className='row my-3'>
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4'>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}     
        </div>
        <div className="container my-4">
        <div className="d-flex mb-3">
  <div className="p-2">
  <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
  </div>
  <div className="ms-auto p-2">
    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
    </div>
</div>
        
        
        </div>
      </div>
    )
  }
}

export default News