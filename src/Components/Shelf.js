import React, { Component } from 'react';
import Book from "./Book"
import Dropdown from "react-dropdown"

class Shelf extends Component {

    constructor(props){
        super(props)
        this.state={
            books:[],
            searchInput:"",
            myurl:[],
            filter:"",
            loading:true
  }
    }
handleInputChange=(e)=>{
    this.setState({searchInput:e.target.value})
}
clear=()=>{
    this.setState({searchInput:"",filter:""})
}


 HandleSearch=(e)=>{
     this.setState({loading:false})
     e.preventDefault()
    const title=this.state.searchInput.replace(/\s/g, '+')
    const filter=this.state.filter.replace(/\s/g, '+')
     fetch(`http://openlibrary.org/search.json?author=${filter}&title=${title}`)
     .then(async response => {
          const data = await response.json();
       // check for error response
       if (!response.ok) {
           // get error message from body or default to response statusText
           const error = (data && data.message) || response.statusText;
           return Promise.reject(error);
       }
       this.setState({ books: data.docs}) 
   })
   .catch(error => {
       this.setState({ errorMessage: error.toString() });
       console.error('There was an error!', error);
   });
}

handleFilterChange=(e)=>{
     this.setState({filter:e.target.value})
 }     
changeFilter=()=>{
 
}

 

componentDidMount(){
    
// if(this.state.loading==false)  
// {  
//       const filter=this.state.filter+this.state.searchInput.replace(/\s/g, '+')
//       alert(this.state.filter)
//       const url="http://openlibrary.org/search.json?"+filter
//       fetch(url)
//       .then(async response => {
//            const data = await response.json();
//         // check for error response
//         if (!response.ok) {
//             // get error message from body or default to response statusText
//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }
//         this.setState({ books: data.docs}) 
//     })
//     .catch(error => {
//         this.setState({ errorMessage: error.toString() });
//         console.error('There was an error!', error);
//     });
//  this.setState({loading:true})
// }

}

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark text-center">
                     <h1>Library</h1>
                 </nav>

          <section className="jumbotron text-center">
             <div className="container">
               <form className="form-inline ">
                    {/* <div className="form-group mb-2">
                        <Dropdown options={options}  placeholder="Select an option"onChange={this.handleDropChange}/> 
                    </div> */}
                    <div className="form-group mx-sm-3 mb-2">
                        <label className="mx-2">Author_name</label>
                         <input value={this.state.filter} onChange={this.handleFilterChange}/> 
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label className="mx-2">Title</label>
                         <input value={this.state.searchInput} onChange={this.handleInputChange}/> 
                    </div>
                    <button  className="btn btn-primary mb-2" onClick={this.HandleSearch} onMouseDown={this.HandleSearch}>Search</button>
                    <button  className="btn btn-primary mb-2 mx-2" onClick={this.clear}>Clear</button>
                  </form>
               </div>
          </section>


      
       <div className=" container">
           <div className="row">
       {this.state.books.map((book)=> <Book  key={book.key}  title={book.title} desc={book['author_name']} src={`http://covers.openlibrary.org/b/olid/${book['cover_edition_key']}-L.jpg`} />)}
        </div> 
</div>

            <footer className="text-muted fixed-bottom text-center bg-dark py-2">

                <div className="container">
                  <p >
                   <a href="#">Back to top</a>
                 </p>
             </div>
            </footer>
            </div>
            
        );
    }
}

export default Shelf;
const options = [
    'Title', 'Author'
  ];
  