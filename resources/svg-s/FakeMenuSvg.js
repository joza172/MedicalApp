import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const FakeMenuSvg = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.75 14.375h34.5a2.876 2.876 0 000-5.75H5.75a2.876 2.876 0 000 5.75zm34.5 5.75H5.75a2.876 2.876 0 000 5.75h34.5a2.876 2.876 0 000-5.75zm0 11.5H5.75a2.876 2.876 0 000 5.75h34.5a2.876 2.876 0 000-5.75z"
        fill="#7F40B0"
      />
    </Svg>
)

export default FakeMenuSvg
