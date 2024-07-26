import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps={
      country:'in',
      pageSize:9,
      category:'general'
    }
    static propTypes={
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string
    }
    constructor(props){
        super(props);
        this.state={
            articles: [],
            loading: true,
            page:1
        }
        document.title=`BEE NEWS ${this.capitalizeFirstLetter(this.props.category)}`;
    }

    async updateNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=429348170a234edf8d313236f6579cfd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
          this.setState({loading:true});
          let data=await fetch(url);
          let parsedData=await data.json();
          this.setState({
            articles:parsedData.articles,
            totalArticles:parsedData.totalResults,
            loading:false
          });
    }
    async componentDidMount(){
      this.updateNews();
  }


  handleNextClick= async ()=>{
      this.setState({page:this.state.page+1});
      this.updateNews();
    }
    handlePrevClick= async ()=>{
      this.setState({page:this.state.page-1});
      this.updateNews();
    }

    capitalizeFirstLetter=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
    }
    
  render() {
    return (
      <div className='container my-4'>
        <h1 className='text-center'>BEE NEWS - Top Headlines from {this.capitalizeFirstLetter(this.props.category)} Category</h1>
        {this.state.loading && <Loading/>}
        <div className='row my-3'>
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4'  key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
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