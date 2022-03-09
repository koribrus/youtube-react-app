import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [ selectedVideo, setSelectedVideo ] = useState(null); 

  
  // * use custom hook
  const [ videos, search ] = useVideos('prince guitar solo')
  
  // * moved out of async function
  useEffect(()=> {
    setSelectedVideo(videos[0]);
  }, [ videos ]);

  // * moved to useVideos custom hook
  // const [ videos, setVideos ] = useState([]); 
  // useEffect(() => onSearchSubmit('legendary guitarist'), []);
  // const onSearchSubmit = async (term) => {
  //   const { data } = await youtube.get('/search', {
  //     params: {
  //       q: term,
  //     },
  //   });
  
  return (
    <div className="ui container">
      <SearchBar submitSearch={search}/>
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail selectedVideo={selectedVideo}/>
          </div>
          <div className='five wide column'>
            <VideoList 
              videos={videos} 
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};




// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { 
//   //     videos: [],
//   //     selectedVideo: null
//   //    };
//   // }

//   componentDidMount() {
//     this.onSearchSubmit('legendary guitarist')
//   }

//   onSearchSubmit = async (term) => {
//     const response = await youtube.get('/search', {
//       params: {
//         q: term,
//       },
//     })
    
//     this.setState({ 
//       videos: response.data.items,
//       selectedVideo: response.data.items[0]
//      });
//     console.log(this.state.videos);
//   }

//   onVideoSelect = (video) => {
//     console.log('From the App!', video);
//     this.setState({ selectedVideo: video})
//   }

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar submitSearch={this.onSearchSubmit}/>
//         <div className='ui grid'>
//           <div className='ui row'>
//             <div className='eleven wide column'>
//               <VideoDetail selectedVideo={selectedVideo}/>
//             </div>
//             <div className='five wide column'>
//               <VideoList 
//                 videos={videos} 
//                 onVideoSelect={this.onVideoSelect}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;