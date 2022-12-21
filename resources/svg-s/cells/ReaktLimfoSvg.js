import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function ReaktLimfoSvg(props) {
  return (
    <Svg
    width={props.size}
    height={props.size}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={40.5} cy={40.5} r={40.5} fill="#AF93FF" />
      <Path
        d="M71.422 24.233C73.548 36.724 66.824 52.566 49 57c-17.824 4.434-38.218 4.72-40.344-7.771C6.53 36.737 12.484 13.636 30.308 9.202c17.824-4.434 38.988 2.54 41.114 15.031z"
        fill="#A448FF"
      />
      <Path
        d="M29.192 31.799c-2.35 6.887-7.405 11.764-11.291 10.893-3.887-.871-5.133-7.16-2.783-14.047 2.35-6.887 7.405-11.764 11.291-10.893 3.887.87 5.133 7.16 2.783 14.047z"
        fill="#fff"
        fillOpacity={0.48}
      />
      <Path
        d="M76.816 34.234C78.584 35.981 81.5 52.5 68 68.5c-8.93 9.034-22.417 11.982-24.184 10.234-3.5-2.5 9-5 23-20.5 8.93-9.034 8.233-25.747 10-24z"
        fill="#5200FF"
        fillOpacity={0.5}
      />
    </Svg>
  )
}

export default ReaktLimfoSvg
