import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [ videos, setVideos ] = useState([]); 

  useEffect(() => search(defaultSearchTerm), [ defaultSearchTerm ]);

  const search = async (term) => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(data.items);
  }

  return [ videos, search ]
};

export default useVideos;
