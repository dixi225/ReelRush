import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Utills/Hooks/useMovieTrailer'

const Videobackground = ({id}) => {
  useMovieTrailer({id})
  const trailer=useSelector((store)=>store.movie?.mainTrailer)
  return <div>
      {trailer&&<iframe className=" w-screen aspect-video"src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1"}frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

      </iframe>}
    </div>
}

export default Videobackground