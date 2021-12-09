import React from 'react'
import MovieSlider from '../MovieSlider/MovieSlider';

function Homepage() {
    return <div>{process.env.REACT_APP_API_KEY}
    <MovieSlider/></div>;
}

export default Homepage
