import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function BackZoomSvg(props) {
    return (
      <Svg
       width={props.size}
       height={props.size}
       viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="22.0532" cy="22.0532" r="22" fill="white"/>
      <Path d="M19.6413 34.0922C20.3133 34.722 21.395 34.7144 22.0572 34.0751C22.7193 33.4358 22.7113 32.407 22.0392 31.777L12.8649 23.1785L36.2198 23.1785C37.1633 23.1785 37.9281 22.451 37.9281 21.5535C37.9281 20.6562 37.1633 19.9285 36.2198 19.9285L12.8762 19.9285L22.0392 11.3406C22.7113 10.7107 22.7193 9.68188 22.0572 9.0426C21.395 8.40331 20.3133 8.39569 19.6413 9.02559L7.81245 20.112C6.96356 20.9076 6.96356 22.2102 7.81245 23.0058L19.6413 34.0922Z" fill="#7F40B0"/>
      </Svg>
      
    )
  }
  
  export default BackZoomSvg