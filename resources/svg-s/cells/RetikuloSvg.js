import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function RetikuloSvg(props) {
  return (
    <Svg
    width={props.size}
    height={props.size}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={40.5} cy={40.5} r={40.5} fill="#E9EBFF" />
      <Path
        d="M29.397 31.744c-3.67 8.491-8.453 15.43-13.551 13.226-5.098-2.204-8.153-15.393-4.482-23.884 3.67-8.492 14.668-12.462 19.766-10.259 5.098 2.204 1.938 12.425-1.733 20.917z"
        fill="#fff"
      />
    </Svg>
  )
}

export default RetikuloSvg
