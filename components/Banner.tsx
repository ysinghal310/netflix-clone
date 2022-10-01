import Image from 'next/image'
import { Movie } from '../typing';
import { useState, useEffect }  from "react"
import { baseUrl } from '../constant/movie';

interface Props {
  netflixOriginals: Movie[],
}

const Banner = ({netflixOriginals}: Props) => {
  const [movie,setMovie] = useState<Movie | null>(null);


  useEffect(()=>{
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  },[netflixOriginals])

  return (
    <div>
        <div className='absolute -z-10 top-0 left-0 h-[95vh] w-screen'>
          <Image 
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit='cover'
          />
        
        </div>
    </div>
  )
}

export default Banner;

