import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackSvg(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.588 33.682a1.709 1.709 0 002.398-2.434l-9.174-9.04h23.355a1.708 1.708 0 100-3.416H10.823l9.163-9.028a1.708 1.708 0 10-2.398-2.434L5.759 18.985a2.135 2.135 0 000 3.042l11.829 11.655z"
        fill="#7F40B0"
      />
    </Svg>
  )
}

export default BackSvg