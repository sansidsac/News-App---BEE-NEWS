import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className='row my-3'>
            <div className='col-md-4'>
            <NewsItem title="Headline" description="News description" imageUrl="https://c.ndtvimg.com/2022-11/jsjh3gbc_virat-kohli-ani-650_625x300_11_November_22.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="Headline" description="News description" imageUrl="https://c.ndtvimg.com/2022-11/jsjh3gbc_virat-kohli-ani-650_625x300_11_November_22.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="Headline" description="News description" imageUrl="https://c.ndtvimg.com/2022-11/jsjh3gbc_virat-kohli-ani-650_625x300_11_November_22.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605"/>
            </div>
        </div>
        <div className='row my-3'>
            <div className='col-md-4'>
            <NewsItem title="Headline" description="News description" imageUrl="https://c.ndtvimg.com/2022-11/jsjh3gbc_virat-kohli-ani-650_625x300_11_November_22.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="Headline" description="News description" imageUrl="https://c.ndtvimg.com/2022-11/jsjh3gbc_virat-kohli-ani-650_625x300_11_November_22.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="Headline" description="News description" imageUrl="https://c.ndtvimg.com/2022-11/jsjh3gbc_virat-kohli-ani-650_625x300_11_November_22.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605"/>
            </div>
        </div>
      </div>
    )
  }
}

export default News