import * as React from "react"
import Svg, { Circle, Path, Ellipse } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={82}
      height={82}
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={41.3066} cy={41.3068} r={40.5} fill="#DBCFFD" />
      <Path
        d="M5.505 28.453c.332-9.165 16.25-19.828 33.37-19.145 17.118.684 31.598 8.605 31.266 17.77-.332 9.165-40.226 46.768-43.258 24.667-3.783-11.589-18.94-.856-21.378-23.292z"
        fill="#9F72FF"
      />
      <Path
        d="M36.262 12.393c10.557-4.216 28.11-.09 33.136 10.19 5.027 10.282.91 22.511-9.648 26.727-10.558 4.216-25.066 19.992-30.092 9.711-5.027-10.281-18.14-34.416 6.604-46.627z"
        fill="#9F72FF"
      />
      <Ellipse
        rx={1.33355}
        ry={1.29574}
        transform="matrix(-.94395 -.33008 .2962 -.95512 62.553 26.33)"
        fill="#fff"
        fillOpacity={0.7}
      />
      <Ellipse
        rx={1.33355}
        ry={1.29574}
        transform="matrix(-.94395 -.33008 .2962 -.95512 61.361 22.974)"
        fill="#fff"
        fillOpacity={0.7}
      />
      <Ellipse
        rx={1.33355}
        ry={1.29574}
        transform="matrix(-.94395 -.33008 .2962 -.95512 59.09 26.099)"
        fill="#fff"
        fillOpacity={0.7}
      />
      <Ellipse
        rx={1.33355}
        ry={1.29574}
        transform="matrix(-.94395 -.33008 .2962 -.95512 58.06 21.623)"
        fill="#fff"
        fillOpacity={0.7}
      />
      <Ellipse
        rx={1.33355}
        ry={1.29574}
        transform="matrix(-.94395 -.33008 .2962 -.95512 55.193 23.613)"
        fill="#fff"
        fillOpacity={0.7}
      />
      <Ellipse
        rx={1.33355}
        ry={1.29574}
        transform="matrix(-.94395 -.33008 .2962 -.95512 54.002 20.257)"
        fill="#fff"
        fillOpacity={0.7}
      />
      <Ellipse
        rx={1.33355}
        ry={1.29574}
        transform="matrix(-.94395 -.33008 .2962 -.95512 57.53 18.229)"
        fill="#fff"
        fillOpacity={0.7}
      />
      <Ellipse
        rx={1.33355}
        ry={1.29574}
        transform="matrix(-.94395 -.33008 .2962 -.95512 50.7 18.906)"
        fill="#fff"
        fillOpacity={0.7}
      />
      <Path
        d="M70.637 46.062c.913 1.12-3.443 15.363-9.7 21.445C54.68 73.59 43.446 78.4 42.533 77.28c-.914-1.12 9.163-7.49 15.42-13.572 6.257-6.083 11.77-18.764 12.684-17.645z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
