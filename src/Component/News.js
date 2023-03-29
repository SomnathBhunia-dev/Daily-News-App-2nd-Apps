import React, { Component } from 'react'
import axios from 'axios';
import NewsItem from './NewsItem'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            page: 1,
            loading: false,
            totalResults: 0
        }
        // document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    // capitalizeFirstLetter = (string) => {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    // }

    capitalizeFirstLetter = (str) => {
        return str.replace(/\b\w/g, function (l) {
            return l.toUpperCase();
        });
    }


    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.progressBar(25);
        this.setState({ loading: true });
        try {
            const response = await axios.get(url);
            const parsedData = response.data;
            this.props.progressBar(50);
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            });
            this.props.progressBar(100);
        } catch (error) {
            console.error(error);
            // Handle error
        }
    }

    async componentDidMount() {
        this.updateNews()
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apikey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    }

    // PreviousClick = async () => {
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    // }
    // ClickNext = async () => {
    //     await this.setState({ page: this.state.page + 1 });
    //     this.updateNews();
    // }
    render() {
        return (
            // className={`bg-${this.props.MyStyle}`}
            <>
                <h1 className={`text-center text-${this.props.MyStyle === "light" ? "dark" : "light"}`} style={{ marginTop: "5rem" }}> Today's Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
                {this.state.loading && <Loading />}


                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading />}>
                    <div className={`container `}>
                        <div className={`row my-5 text-${this.props.MyStyle === "light" ? "dark" : "light"}`} >
                            {this.state.articles.map((e) => {
                                return <div className={`col-md-4 `} key={e.url} style={{ height: "32rem" }}>
                                    <NewsItem bg={this.props.MyStyle} source={e.source.name} title={e.title ? e.title.slice(0, 40) : ""} description={e.description ? e.description.slice(0, 72) : ""} imageUrl={e.urlToImage} NewsUrl={e.url} time={e.publishedAt} author={e.author ? e.title.slice(0, 20) : ""} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

                
                {/* <div className="d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.PreviousClick}>&larr; Previous</button>
                        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.ClickNext}>Next &rarr;</button>
                    </div> */}
            </>

        )
    }
}
