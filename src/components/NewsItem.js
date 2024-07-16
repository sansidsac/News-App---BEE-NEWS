import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl } = this.props;
    return (
      <div>
        <div className="card my-2">
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem