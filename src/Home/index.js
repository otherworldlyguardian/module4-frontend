import React from 'react'

const backgroundStyle = {
  backgroundImage: 'url(http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-34.jpg)',
    backgroundSize: 'cover',
    width: '100%',
    height: 700
}

const h1Style = {
  paddingTop: 50,
  paddingLeft: 260,
  fontSize: 74,
  textShadow: "3px 3px red"
}

const Home = () => {
  return (
    <div style={backgroundStyle}>
      <h1 style={h1Style}>WELCOME TO FWEATHER</h1>
    </div>
  )
}

export default Home
