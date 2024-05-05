import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Image from "../Loading.jpg";
import PropTypes from "prop-types";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

// API = 5e7192dae86e4f53895093d40db6f5b6

// Third API key = 37b3dd4554c640ba81d2645a27fbdce2

export default class News extends Component {
  static defaultProps = {
    pageSize: 5,
    country: "in",
    category: "general",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: true,
    };
    document.title = `Top ${this.props.category} News - Tenet News`
  }

  async UpdateNews() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=37b3dd4554c640ba81d2645a27fbdce2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.UpdateNews();
  }

  handleprevclick = () => {
    this.setState({page: this.state.page - 1 });
    this.UpdateNews();
  };

  handleNextclick = () => {
    this.setState({ page: this.state.page + 1 });
    this.UpdateNews();
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=37b3dd4554c640ba81d2645a27fbdce2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false
    });
  };

  render() {
    return (
     
        <>
        {/* {this.state.loading && <Loader/>} */}
        
            <div className="container">
        
                <h1 className="text-center mt-5">Top {this.props.category} Headlines</h1>
    
              <div className="row">
                {this.state.articles.map((element, index) => {
                  return (
                    
                    <div className="col-md-4 mt-4" key={index}>
                      <NewsItem
                        title={element.title.slice(0, 70)}
                        Description={
                          element.description
                            ? element.description.slice(0, 100)
                            : "Description is not given"
                        }
                        Imageurl={
                          element.urlToImage ? element.urlToImage : Image
                        }
                        Newsurl={element.url}
                        Author={
                          !element.author
                            ? "Unknown"
                            : element.author.slice(0, 35)
                        }
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
              </div>
            
          

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.loading ? <Loader/> : this.state.articles.length !== this.state.totalResults}
            loader={<Loader />}
          ></InfiniteScroll>
        </>
     
    );
  }
}
