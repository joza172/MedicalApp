import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function PlazmaSvg(props) {
  return (
    <Svg
    width={props.size}
    height={props.size}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={40.5} cy={40.5} r={40.5} fill="#AF93FF" />
      <Path
        d="M63.272 45.436c-3.787 9.87-11.895 22.37-26.575 17.971-14.68-4.398-23.182-17.138-19.395-27.009 3.787-9.87 8.17-23.637 22.85-19.239 14.68 4.399 26.907 18.406 23.12 28.277z"
        fill="#A448FF"
      />
      <Path
        d="M36.023 33.532c-4.616 3.945-10.319 5.295-12.738 3.017-2.42-2.278-.64-7.323 3.977-11.267C31.877 21.338 37.58 19.987 40 22.265c2.42 2.279.639 7.323-3.977 11.267z"
        fill="#fff"
        fillOpacity={0.48}
      />
    </Svg>
  )
}

export default PlazmaSvg
