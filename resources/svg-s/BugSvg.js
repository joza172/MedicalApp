import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17 2a3 3 0 013 3v7.903l-.26-.52c-.921-1.844-3.553-1.844-4.474 0L11.46 20H5a3 3 0 01-3-3V5a3 3 0 013-3h12zm-1.53 4.97L9 13.44l-2.47-2.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l7-7a.75.75 0 00-1.06-1.06zm.691 5.86l-3.997 7.998A1.5 1.5 0 0013.507 23h7.994a1.5 1.5 0 001.343-2.172l-3.997-7.998c-.553-1.107-2.133-1.107-2.686 0zm1.843 2.666v3.001a.5.5 0 01-1 0v-3.001a.5.5 0 011 0zm-.5 5.503a.5.5 0 110-1.001.5.5 0 010 1z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgComponent
