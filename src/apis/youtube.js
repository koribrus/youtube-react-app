import axios from 'axios';

const KEY = 'AIzaSyCT6rQ13oH8HFNMigjD65aPHX8BEcylLaQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})