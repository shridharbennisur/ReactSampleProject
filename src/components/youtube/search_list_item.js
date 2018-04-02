import React, {Component} from 'react';

const SearchListItem = (props) => {
    let video = props.videoDetail;
    const imageUrl = video.snippet.thumbnails.default.url;
    let element = <li onClick = { () => props.onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} alt={video.snippet.title}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                    </div>
                    </div>
         </li>
    return (element);
};

//class based component 
/*
class SearchListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.videoDetail);
        return (<li key={this.props.videoDetail.etag}>
          {this.props.videoDetail.snippet.description}
        </li>);
    }
}*/

export default SearchListItem;
