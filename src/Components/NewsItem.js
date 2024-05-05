import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { title, Imageurl, Newsurl, Description, Author, date, source } = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>

          <span className="badge rounded-pill bg-danger">
            <span className="visually-hidden"></span>
              {source}
          </span>
          </div>
          <img src={Imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{Description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {Author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={Newsurl} target="_blank" className="btn btn-dark">
              {" "}
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
