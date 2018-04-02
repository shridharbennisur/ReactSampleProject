import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchInputChange(term);
    }
    render() {
        return ( 
            <div className="search-bar">
                <div class="right-inner-addon ">
         <i class="icon-search"></i>
           <input type="search"
           class="form-control" 
           placeholder="Search" onChange = {
                (event) => this.onInputChange(event.target.value) } />
           </div>
              </div>)
              }
    }
export default SearchBar;