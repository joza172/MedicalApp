import * as React from "react"
import Svg, { Path } from "react-native-svg"

function InfoSvg(props) {
  return (
    <Svg
      width={props.size != null ? props.size: 24}
      height={props.size != null ? props.size: 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001C6.476 22.002 2 17.524 2 12.001 1.999 6.477 6.476 1.999 12 1.999zm-.004 8.25a1 1 0 00-.992.885l-.007.116.004 5.502.006.117a1 1 0 001.987-.002L13 16.75l-.004-5.501-.007-.117a1 1 0 00-.994-.882zm.005-3.749a1.251 1.251 0 100 2.503A1.251 1.251 0 0012 6.5z"
        fill={props.color != null ? props.color:"#212121"}
      />
    </Svg>
  )
}

export default InfoSvg