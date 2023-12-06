import * as React from 'react'
import Svg, { Path,Rect,Ellipse,Circle } from 'react-native-svg'

const VelikaEpruveta = (props) => (
    <Svg width={props.width} height={props.height}
     viewBox="0 0 133 284" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect x="3" y="3" width="127" height="38.1298" rx="17" stroke="#7F40B0" stroke-width="6"/>
    <Path d="M18.4287 67.4087H115.281V235.574C115.281 262.319 93.5997 284 66.8548 284C40.1098 284 18.4287 262.319 18.4287 235.574V67.4087Z" fill="#B480DD" fill-opacity="0.95"/>
    <Path d="M21.4287 41.5303H112.281V235.574C112.281 260.662 91.9429 281 66.8548 281C41.7666 281 21.4287 260.662 21.4287 235.574V41.5303Z" stroke="#7F40B0" stroke-width="6"/>
    <Ellipse cx="13.5" cy="13.5" rx="13.5" ry="13.5" transform="matrix(0.99998 0.00634847 0.00465376 0.999989 40 162)" fill="#7F40B0"/>
    <Circle cx="9" cy="9" r="9" transform="matrix(0.99998 0.00634847 0.00465376 0.999989 70 216)" fill="#7F40B0"/>
    <Circle cx="17.5" cy="17.5" r="17.5" transform="matrix(0.99998 0.00634847 0.00465376 0.999989 61.3872 103.825)" fill="#7F40B0"/>
    </Svg>
    
    


  )
  
  export default VelikaEpruveta