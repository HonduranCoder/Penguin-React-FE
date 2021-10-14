import React, { Component } from 'react';
import { searchBooks } from './fetch-utils';
// import { SuperAgent } from 'superagent';


export default class Search extends Component {
    state = {
      books: [],
      search: ''
    }

   handleSubmit = async e => {
     e.preventDefault();
     const books = await searchBooks(this.state.search);
     console.log(books);
     this.setState({ books: books });
   }

   render() {
     return (
       <>
         <form onSubmit={this.handleSubmit}>
           <label>Search Best Sellers:<input className='searchbox' value={this.state.search} onChange={e => this.setState({ search: e.target.value })}/></label>
           <button>Search</button>
         </form>
         <div className = "bookPage">
           {this.state.books.map(book => 
             <span className = "bookDesc" key={book.title}> 
               <div>{book.title}</div>
               <div>{book.description} </div>
             </span>)}
         </div>
       </>
     );
   }
}
