import React from "react";

class SearchForm extends React.Component {
    constructor () {
        super ();
        this.state = {
            searchStr: ""
        }
    }
    handleChanges = e => {
        this.setState({
            searchStr: e.target.value
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.getFilter(this.state.searchStr);
    }
    clearFilter = () => {
        this.props.getFilter("");
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="searchStr" value={this.state.searchStr} onChange={this.handleChanges}/>
                <button>Search</button>
            </form>
            <button onClick={this.clearFilter}>Clear Filter</button></div>
        );
    }
}

export default SearchForm;