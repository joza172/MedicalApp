import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CloseSvg(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.016 7.312l.139-.157c.6-.601 1.546-.647 2.2-.139l.157.139L20 17.642 30.488 7.155a1.667 1.667 0 112.357 2.357L22.358 20l10.487 10.488c.6.601.647 1.546.139 2.2l-.139.157c-.6.601-1.546.647-2.2.139l-.157-.139L20 22.358 9.512 32.845a1.667 1.667 0 11-2.357-2.357L17.64 20 7.155 9.512c-.601-.601-.647-1.546-.139-2.2l.139-.157-.139.157z"
        fill="#7F40B0"
      />
    </Svg>
  )
}

export default CloseSvg