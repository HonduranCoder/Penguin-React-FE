import React, { Component } from 'react';
import { searchBooks } from './fetch-utils';

export default class Search extends Component {
    state = {
      books: [],
      search: ''
    }

   // componentDidMount = async() => 

   handleSubmit = async e => {
     e.preventDefault();
     const books = await searchBooks(this.state.search);
     this.setState({ books: books });
   }

   
   render() {
     console.log(this.state);
     return (
       <div>
         <form onSubmit={this.handleSubmit}>
           <label>Search Best Sellers:<input className='searchbox' onChange={e => this.setState({ search: e.target.value })}/></label>
           <button>Search</button>
         </form>
       </div>
     );
   }
}
