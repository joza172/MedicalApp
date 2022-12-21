import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function BazoEritroSvg(props) {
  return (
    <Svg
    width={props.size}
    height={props.size}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse
        cx={40.3647}
        cy={40.5}
        rx={40.3647}
        ry={40.5}
        fill="#3948CD"
        fillOpacity={0.9}
      />
      <Path
        d="M69.44 23.95c6.11 42.652-11.43 43.668-24.662 47.891-13.233 4.223-28.842 1.598-35.013-17.869-6.172-19.467 7.492-34.2 20.725-38.423 13.233-4.223 34.113-6.859 38.95 8.401z"
        fill="#B10CEB"
        fillOpacity={0.9}
      />
      <Path
        d="M26.854 38.92c-.456 5.39-1.965 10.115-5.696 9.797-3.732-.318-8.595-7.128-8.138-12.52.456-5.391 6.576-9.571 10.308-9.253 3.732.318 3.982 6.583 3.526 11.975z"
        fill="#fff"
        fillOpacity={0.7}
      />
    </Svg>
  )
}

export default BazoEritroSvg
