import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchSvg = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.919 0a8.919 8.919 0 0 1 7.092 14.328l5.64 5.642a1.19 1.19 0 0 1-1.569 1.78l-.112-.098-5.642-5.64A8.919 8.919 0 1 1 8.919 0Zm0 2.378a6.54 6.54 0 1 0 0 13.081 6.54 6.54 0 0 0 0-13.08Z"
      fill="#7F40B0"
    />
  </Svg>
)

export default SearchSvg
