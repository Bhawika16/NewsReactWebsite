import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react';


export default class NewsItem extends Component {
  render() {
    let {title,imageURL,newsurl,imgu}=this.props;
    return (

        <div className="card" >
  <img className="card-img-top" src={imgu} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={newsurl} target="_blank()" className="btn btn-primary">Read more</a>
  </div>
</div>

    )
  }
}

