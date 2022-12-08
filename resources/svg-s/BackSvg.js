import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackSvg(props) {
  return (
    <Svg
      width={41}
      height={39}
      viewBox="0 0 41 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.588 32.039c.672.63 1.754.622 2.416-.017a1.57 1.57 0 00-.018-2.298l-9.174-8.599h23.355c.943 0 1.708-.727 1.708-1.625 0-.897-.765-1.625-1.708-1.625H10.823l9.163-8.588a1.57 1.57 0 00.018-2.298 1.771 1.771 0 00-2.416-.017L5.759 18.06a1.962 1.962 0 000 2.893L17.588 32.04z"
        fill="#7F40B0"
      />
    </Svg>
  )
}

export default BackSvg