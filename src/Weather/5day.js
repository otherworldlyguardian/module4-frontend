import React from 'react'
import { Card } from 'semantic-ui-react'

const cardStyle = {
  float: 'left',
  height: 350,
  width: 375,
  left: '20%'
}

const FiveDay = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <Card style={cardStyle}>
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
    </div>
  )
}

export default FiveDay
