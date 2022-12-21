import * as React from "react"
import Svg, { Circle, Ellipse } from "react-native-svg"

function EritrocitSvg(props) {
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
      <Ellipse
        rx={24.7214}
        ry={13.6191}
        transform="matrix(.93017 .37144 -.36829 .92785 39.646 40.182)"
        fill="#E24646"
      />
      <Ellipse
        rx={18.1651}
        ry={6.60312}
        transform="matrix(.93017 .37144 -.36829 .92785 40.186 38.458)"
        fill="#A20707"
      />
      <Ellipse
        rx={2.40541}
        ry={1.60446}
        transform="matrix(.93017 .37144 -.36829 .92785 20.79 35.502)"
        fill="#FF5858"
      />
      <Ellipse
        rx={2.40541}
        ry={1.60446}
        transform="matrix(.93017 .37144 -.36829 .92785 23.456 40.206)"
        fill="#FF6C6C"
      />
    </Svg>
  )
}

export default EritrocitSvg
