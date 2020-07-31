import React, {Component} from 'react'
import API from '../utils/API'
import FlexContainer from '../components/FlexContainer'
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

        let data = this.state.books.filter(book=> book.id === event.target.id)
        data=data[0];
        API.saveBook(data).then(alert('Your book has been saved!')).catch(err => console.log(err));
    };

    handleSearch = (event) => {
        event.preventDefault();
        API.searchBook(this.state.query).then(response => {
            let results = response.data.items;

            results = results.map(result => {
                result = {
                    id: result.id, 
                    title:result.volumeInfo.title, 
                    authors: result.volumeInfo.authors, 
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
            <FlexContainer>
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
                </FlexContainer>
            </>
        )
    }
}

export default Search;