 import axios from 'axios';
 
 
 
 const  KEY = 'AIzaSyDUz1d7tB44SssvqwpwoBstPM_m_XtTgbo';

  export default  axios.create ({
     baseURL:"https://www.googleapis.com/youtube/v3",
     params:{
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }

 })