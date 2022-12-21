import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function LimfocitSvg(props) {
  return (
    <Svg
    width={props.size}
    height={props.size}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={40.5} cy={40.5} r={40.5} fill="#CDBCFF" />
      <Path
        d="M75.389 35.109c0 14.73-16.93 38.647-36.47 38.647S4.9 60.454 4.9 45.723c0-14.73 10.397-39.191 29.938-39.191 19.54 0 40.552 13.846 40.552 28.577z"
        fill="#A448FF"
      />
      <Path
        d="M29.695 32.225c-3.697 7.056-9.877 11.107-13.802 9.05-3.926-2.057-4.11-9.445-.412-16.5 3.698-7.055 9.877-11.107 13.803-9.05 3.925 2.057 4.11 9.445.412 16.5z"
        fill="#fff"
        fillOpacity={0.48}
      />
    </Svg>
  )
}

export default LimfocitSvg
