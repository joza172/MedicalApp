import * as React from 'react'
import Svg, { Path,Rect,Ellipse } from 'react-native-svg'

const EpruvetaSvg = (props) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 21 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
  <Rect x="1.54053" y="1" width="17.9189" height="4.50035" rx="2.25017" stroke="#7F40B0" stroke-width="2"/>
  <Path d="M3.25671 8.35791H17.7432V28.9733C17.7432 32.9736 14.5003 36.2165 10.5 36.2165C6.49963 36.2165 3.25671 32.9736 3.25671 28.9733V8.35791Z" fill="#9C53D5" fill-opacity="0.7"/>
  <Path d="M4.25671 5.64307H16.7432V28.9729C16.7432 32.421 13.948 35.2162 10.5 35.2162C7.05191 35.2162 4.25671 32.421 4.25671 28.9729V5.64307Z" stroke="#7F40B0" stroke-width="2"/>
  <Ellipse cx="7.91318" cy="21.5387" rx="1.94015" ry="1.9899" fill="#7F40B0"/>
  <Ellipse cx="11.7934" cy="26.315" rx="1.16409" ry="1.19394" fill="#7F40B0"/>
  <Ellipse cx="11.8212" cy="15.3884" rx="2.32819" ry="2.38788" fill="#7F40B0"/>
  </Svg>
  )
  
  export default EpruvetaSvg