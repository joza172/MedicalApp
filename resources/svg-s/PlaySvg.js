import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PlaySvg = (props) => (
  <Svg
    width={60}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 29.583C0 13.245 13.245 0 29.583 0c16.339 0 29.584 13.245 29.584 29.583 0 16.339-13.245 29.584-29.584 29.584C13.245 59.167 0 45.922 0 29.583ZM26.198 18.21c-2.465-1.366-5.49.417-5.49 3.234v16.28c0 2.818 3.025 4.6 5.49 3.235l17.033-9.434a2.218 2.218 0 0 0 0-3.882L26.198 18.21Z"
      fill="#fff"
    />
  </Svg>
)

export default PlaySvg