import React from 'react'
import Player from '../src/components/Player'
import { Link , useParams } from 'react-router-dom'
import { songsArray } from '../src/assets/database/songs'
import { artistArray } from '../src/assets/database/artists'

const Song = () => {

  const { id } = useParams();

  
  const songObj = songsArray.filter(
      (currentSongObj) => currentSongObj._id === id
  ) [0];

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === songObj.artist
  ) [0];

  const songsArrayFromArtist = songsArray.filter(
      (currentSongObj) => currentSongObj.artist === artistObj.name
  );
  
  const randomIndex= Math.floor
  (Math.random() * (songsArrayFromArtist.length - 1));
  
  const randomIndex2= Math.floor
  (Math.random() * (songsArrayFromArtist.length - 1));

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  
  const randomIdFromArtist2 = songsArrayFromArtist[randomIndex]._id;


  return (
    <div className='song'>
      <div className="song__container">
        <div className="song__image-container">
        <img src={songObj.image}
        alt={`Imagem da Musica ${songObj.name}`} />
        </div>
      </div>

      <div className='song__bar'>
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
          width={75}
          height={75}
          src={artistObj.image}
          alt={`Imagem do Artista ${artistObj.name}`}
          />
        </Link>
        
        <Player duration = {songObj.duration} 
        randomIdFromArtist= {randomIdFromArtist}
        randomIdFromArtist2= {randomIdFromArtist2}
        audio={songObj.audio}
        />

        <div >
          <p className='song__name'>{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song
