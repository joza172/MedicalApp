import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const SearchSvg = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.919 0a8.919 8.919 0 017.092 14.328l5.64 5.642a1.19 1.19 0 01-1.569 1.78l-.112-.098-5.642-5.64A8.919 8.919 0 118.919 0zm0 2.378a6.54 6.54 0 100 13.081 6.54 6.54 0 000-13.08z"
        fill="#7F40B0"
      />
    </Svg>
)

export default SearchSvg
