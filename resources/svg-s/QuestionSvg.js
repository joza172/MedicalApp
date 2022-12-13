import * as React from "react"
import Svg, { Path } from "react-native-svg"

function QuestionSvg(props) {
  return (
    <Svg
      width={108}
      height={108}
      viewBox="0 0 108 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M54 9c24.853 0 45 20.151 45 45S78.853 99 54 99C29.146 99 9 78.849 9 54S29.146 9 54 9zm0 60.75a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0-39.375c-6.835 0-12.375 5.54-12.375 12.375a3.375 3.375 0 006.72.458l.03-.458a5.625 5.625 0 1111.25 0c0 2.425-.608 3.624-2.902 5.995l-.61.619c-3.95 3.951-5.488 6.513-5.488 11.386a3.375 3.375 0 006.75 0c0-2.425.608-3.624 2.902-5.995l.61-.619c3.95-3.951 5.488-6.513 5.488-11.386 0-6.834-5.54-12.375-12.375-12.375z"
        fill="#7F40B0"
      />
    </Svg>
  )
}

export default QuestionSvg
