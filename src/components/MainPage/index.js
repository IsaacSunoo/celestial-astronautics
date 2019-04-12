import React from 'react';

const MainPage = ({ date, explanation, hdurl, title, media_type, url }) => {
  return (
    <div className='home-page'>
      <h3>{title}</h3>
      <img src={hdurl} alt='daily nasa media' />
      {/* <iframe width='560' height='315' src={dailyNews.url}></iframe> */}
      <p>{date}</p>
      <p>{explanation}</p>
    </div>
  )
}

export default MainPage;