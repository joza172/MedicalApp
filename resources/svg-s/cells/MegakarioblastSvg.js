import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"

function MegakarioblastSvg(props) {
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
        cx={41.1625}
        cy={40.8896}
        rx={39.8177}
        ry={39.8783}
        fill="#3948CD"
      />
      <Path
        d="M68.728 22.769c6.027 41.997 3.866 43.146-23.212 48.98-13.053 4.159-28.451 1.574-34.539-17.594C4.89 34.987 15.171 14.757 28.224 10.6c13.054-4.158 35.732-2.856 40.504 12.17z"
        fill="#7F00AC"
      />
      <Path
        d="M27.835 39.333c-.45 5.309-1.938 9.96-5.619 9.647-3.681-.313-8.478-7.018-8.027-12.327.45-5.309 6.487-9.425 10.168-9.111 3.681.313 3.928 6.482 3.478 11.79z"
        fill="#fff"
      />
    </Svg>
  )
}

export default MegakarioblastSvg
