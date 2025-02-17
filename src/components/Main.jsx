import React from 'react';
import Itemlist from './Itemlist';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';


const Main = ( {type} ) => {
    return (
      <div className="main">

        {/* Item List de Artistas*/}
        {type === "artists" || type === undefined ? (
        <Itemlist 
          title="Artistas" 
          items= {5} 
          itemsArray={artistArray} 
          path="/artists"
          idPath= "/artist"
        />
        ) : (
        <> </>
        )}
        
        

        {/* Item List de Musicas*/}
        {type === "songs" || type === undefined ? (
        <Itemlist 
          title="Musicas" 
          items= {20} 
          itemsArray={songsArray} 
          path="/songs"
          idPath= "/song"
        />
        ) : (
          <> </>
        )}
        
      </div>
    );
  };
  
  export default Main;
  