import React from 'react'

const Hero = ({ heroObj }) => {
  return (
    <div className="hero-container">
      <img src={heroObj.img} alt={heroObj.title} />

      <div className="foreground">
        <div className="info">
          <h1>{heroObj.header}</h1>
          <h3>{heroObj.subHeader}</h3>
          <span>{heroObj.action}</span>
        </div>
      </div>
    </div>
  )
}

export default Hero