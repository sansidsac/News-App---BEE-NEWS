import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date } = this.props;
    const day=new Date(date).toGMTString();
    return (
      <div>
        <div className="card my-2">
  <img src={!imageUrl?"https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {day}</small></p>
    <a href={newsUrl} rel='noreferrer' target='_blank' className="btn btn-sn btn-warning">More Details</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem