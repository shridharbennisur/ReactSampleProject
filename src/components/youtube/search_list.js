import React, {Component} from 'react';
import SearchListItem from './search_list_item';


const SearchList = (props) => {
    const VideoListItem = props.videos.map((video)=> {
        return <SearchListItem onVideoSelect = {props.onVideoSelect} key = {video.etag} videoDetail = {video}/>
    });

    return (<ul className="col-md-4 list-group">
          {VideoListItem}
        </ul>);
};

//class based component
/*class SearchList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.videos);
        return (
            <ul className="col-md-4 list-group">
                {this.props.videos.map((videos) =>
        <li key={videos.etag}>
          {videos.snippet.description}
        </li>
      )}
            </ul>
        );
    }
}*/

export default SearchList;
