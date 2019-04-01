

import React from 'react';

class SearchBar extends React.Component{
   
   
       state= {term:''};
    
    onInputSubmit=event =>{
    event.preventDefault();
       this.props.onFormTerm(this.state.term);
   
    }

    render(){
        return (
            <div className="ui category search" style= {{marginTop:'20px' ,innerWidth:'30px'}}>
           <form  onSubmit = {this.onInputSubmit} >  
            <div className="ui icon input">
           
            <input  className="prompt"
               type="text" 
               value= { this.state.term}
               onSubmit = {this.onInputSubmit} 
               onChange= {event=> this.setState({term:event.target.value})}
              placeholder="Search Vedios..."/>
              
              <i className="search icon"></i>

            </div>
            </form>
            </div>
       
         
        );
    }
}

export default SearchBar ;