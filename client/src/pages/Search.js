import React, {Component} from 'react'
import API from '../utils/API'
import Form from '../components/Form';
import Results from '../components/Results'
import './search.css'


class Search extends Component {
    state = {
        query: '',
        books: []
    };

    handleChange = (event) => {
        const query = event.target.value;
        this.setState({query})
    };

    saveBooks = event => {
        event.preventDefault();

        let saveData = this.state.books.filter(book=> book.id === event.target.id)
        saveData=saveData[0];
        API.saveBook(saveData).then(alert('Your Book Has been Saved!')).catch(err => console.log(err));
    };

    handleSearch = (event) => {
        event.preventDefault();
        API.searchBook(this.state.query).then(response => {
            let results = response.data.items;

            results = results.map(result => {
                result = {
                    id: result.id, 
                    title:result.volumeInfo.title, 
                    author: result.volumeInfo.authors, 
                    description: result.volumeInfo.description,
                    link: result.volumeInfo.infoLink, 
                    image: result.volumeInfo.imageLinks.thumbnail
                }
                return result;
            })
            this.setState({books: results})
        }).catch(err => console.log(err));
    }
    render() {
        return(
            <>
                <h1 className='searchsave'> Search 'n Save Your Favorite Books!</h1>
    
                <Form 
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                />
                {this.state.books.length ? (
                    <div>
                        <h3 className='searchsave'>Your Search Results</h3>
                        <Results books={this.state.books} saveBooks={this.saveBooks} /> 
                    </div>
                ) : (
                    <h3 className='noresults'>No Results Yet</h3>
                )}
            </>
        )
    }
}

export default Search;