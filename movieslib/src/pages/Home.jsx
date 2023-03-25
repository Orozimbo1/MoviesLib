import { useState, useEffect } from 'react'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovie = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
    console.log(topMovies)
  }

  useEffect(() => {
    
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

    getTopRatedMovie(topRatedUrl)

  }, [])

  return (
    <div>Home</div>
  )
}

export default Home