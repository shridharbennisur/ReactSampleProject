import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/youtube/search_bar';
import YTSearch from 'youtube-api-search';
import SearchList from './components/youtube/search_list';
import VideoDetal from './components/youtube/video_detail';
import _ from 'lodash';
const config = require('../config');

const api_key = config.youtubeApiKey.key;


class App extends Component {
    constructor(props) {
        super(props);
        let currentComponent = this;
        currentComponent.state = { 
            videos: [],
            selectedVideo: null
          };
         this.videoSearch = this.videoSearch.bind(this);
         this.videoSearch('reactjs'); 
    }

     videoSearch = (term) => {
        let inVideo = this;
        YTSearch({
            key: api_key,
            term: term
        }, function (data) {
             inVideo.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    };
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
        return (<div> 
            <SearchBar onSearchInputChange = {videoSearch}/>
            <VideoDetal video={this.state.selectedVideo}/>
            <SearchList onVideoSelect = { selectedVideo => this.setState({selectedVideo})} videos = {this.state.videos}/>
            </div>);
    }
}


ReactDOM.render( < App /> , document.querySelector('.container'));