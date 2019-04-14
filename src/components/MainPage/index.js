import React from 'react';
import ParticleContainer from '../Particles';

const MainPage = ({ date, explanation, hdurl, title, media_type, url }) => {

  return (
    <div className='home-page'>
      <ParticleContainer />
      <h3>{title}</h3>
      {
        media_type === 'video' ?
        <iframe width='560' height='315' src={url} title={title} className='daily-video'/> :
        <img src={hdurl} alt='daily nasa media' />
      }
      <p className='daily-date'>{date}</p>
      <p className='daily-description'>{explanation}</p>
    </div>
  )
}

export default MainPage;