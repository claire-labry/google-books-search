import React, {Component} from 'react'
import API from '../utils/API'
import Wrapper from '../components/Wrapper';
import Form from '../components/Form';
import Results from '../components/Results'





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

        let data = this.state.books.filter(book=> book.id === event.target.id)
        data=data[0];
        API.saveBook(data).then(alert('Your Book Has been Saved!')).catch(err => console.log(err));
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
    render() {
        return(
            <Wrapper> 
                <h1> Search 'n Save Your Favorite Books!</h1>
    
                <Form 
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                />
                {this.state.books.length ? (
                    <div>
                        <h3>Your Search Results</h3>
                        <Results books={this.state.books} savedBooks={this.savedBooks} /> 
                    </div>
                ) : (
                    <h3>No Results Matched Your Search</h3>
                )}
            </Wrapper>
        )
    }
}

export default Search;