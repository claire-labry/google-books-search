import React, {Component} from 'react'
import API from '../utils/API'




class Search extends Component {
    state = {
        query: '',
        books: []
    };

    handleChange = (event) => {
        const query = event.target.value;
        this.setState({query})
    };

    savedBooks = event => {
        event.preventDefault();
    };

    handleSearch = (event) => {
        event.preventDefault();
        API.searchBook(this.state.query).then(response => {
            let results = response.data.items;

            results = results.map(result => {
                result ={
                    id: result.id, 
                    title:result.volumeInfo.title, 
                    author: result.volumeInfo.authors, 
                    description: result.volumeInfo.description,
                    link: result.volumeInfo.infoLink, 
                    image: result.volumeInfo.imageLinks.thumbnail,
                }
                return result;
            })
            this.setState({books: results})
        }).catch(err => console.log(err));
    }
}

export default Search