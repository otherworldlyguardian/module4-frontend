import React from 'react'
import { Card } from 'semantic-ui-react'

const backgroundStyle = {
  float: 'left',
  height: 350,
  width: 375,
  backgroundSize: 'cover',
  left: '25%'
}

const iframeStyle = {
  float: 'right',
  right: '60%',
  paddingRight: 100
}

const temp = {
  backgroundImage: 'url(https://weather.com/weather/assets/today-card-day-rain.f5a1f2b6412082dd6ed636b45b1b6f55.jpg)'
}

const WeatherShow = (props) => (
  <div>
    <Card style={backgroundStyle}>
       <Card.Content>
         <Card.Header><h2>{props.name}</h2></Card.Header>
         <Card.Meta>
           <span className='date'>
             <h1>{props.temp}°</h1>
           </span>
         </Card.Meta>
         <Card.Description>
           {props.weather_description}<br />
           <img
             width='200'
             height='200'
             src={`http://openweathermap.org/img/w/${props.weather_icon}.png`}
             alt={props.weather_icon}
            />
         </Card.Description>
       </Card.Content>
       <Card.Content extra>
         Last updated at: {props.time}
       </Card.Content>
     </Card>
     <div style={iframeStyle}>
       <iframe
         title={props.owm_id}
         src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyB9ynrswXrhclz_8aBtYc7UjDRxOO-zdds&center=${props.lat},${props.lon}&zoom=13&maptype=satellite`}
         width='500'
         height='500'
         frameBorder="0"

        />
     </div>
   </div>
)


export default WeatherShow
