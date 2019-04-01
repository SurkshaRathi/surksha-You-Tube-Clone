
import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../Api/api';
import VediosList from './VideosList';
import VideoDetail from './VideoDetail';
export default  class App extends React.Component{
 

    state = {video: [],
              SelectedVedio:null};

componentDidMount(){
    this.onTermSubmit('Paneer Masala');
}
onTermSubmit= async term =>{
  
   const ResponseData=  await Youtube.get('/search',{
  params: {
      q: term ,
  }
  });
  this.setState({
      video:ResponseData.data.items,
    SelectedVedio:ResponseData.data.items[0]});
 
};
onVideoSelect=(video)=>{
this.setState({SelectedVedio:video});
}

    render(){
     return (
         <div className= "ui container">
         <SearchBar onFormTerm = {this.onTermSubmit}/>
         <div className= "ui grid">
             <div className = "ui row">
             <div className = "eleven wide column"> 
             <VideoDetail video = {this.state.SelectedVedio}/>
             </div>
       <div className = "five wide column"> 
       <VediosList 
          onSelectedVedio= {this.onVideoSelect}
    videos= {this.state.video}/>
   </div>
   </div>
       </div>
     
        </div>
     );
    }
}
