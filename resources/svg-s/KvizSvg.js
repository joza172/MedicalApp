import * as React from "react"
import Svg, { Path } from "react-native-svg"

const KvizSvg = (props) => (
    <Svg
      width={81}
      height={81}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
       d="M6.75 35.4375C6.75 21.4578 18.0828 10.125 32.0625 10.125C46.0421 10.125 57.375 21.4578 57.375 35.4375C57.375 49.4171 46.0421 60.75 32.0625 60.75C28.3509 60.75 24.8202 59.9494 21.6386 58.51C17.3919 59.4901 12.8191 60.3332 10.7154 60.7078C8.39477 61.1209 6.37348 59.0838 6.82337 56.7584C7.22095 54.7037 8.10419 50.2875 9.12384 46.1528C7.60026 42.8963 6.75 39.2631 6.75 35.4375ZM27.486 21.2869C25.9958 22.083 24.8205 23.3217 23.9307 24.963C23.2644 26.192 23.7205 27.7284 24.9495 28.3947C26.1784 29.061 27.7149 28.6048 28.3812 27.3759C28.875 26.4649 29.3873 26.0108 29.8714 25.7522C30.3809 25.48 31.0658 25.315 32.0623 25.315C32.8169 25.3149 33.7066 25.582 34.3602 26.1175C34.9356 26.5891 35.4372 27.3475 35.4372 28.6875C35.4372 29.3451 35.1837 29.6483 33.4513 31.0097C31.9314 32.2041 29.5309 34.1415 29.5309 37.9688C29.5309 39.3667 30.6642 40.5 32.0622 40.5C33.4601 40.5 34.5934 39.3667 34.5934 37.9688C34.5934 36.7183 35.1462 36.1166 36.5793 34.9903C36.6673 34.9211 36.7632 34.8476 36.8648 34.7693C38.1753 33.7625 40.4997 31.9767 40.4997 28.6875C40.4997 25.825 39.3137 23.6315 37.5688 22.2017C35.9022 20.836 33.8388 20.2524 32.062 20.2525C30.5272 20.2526 28.9509 20.5043 27.486 21.2869ZM35.4378 47.2503C35.4378 45.386 33.9268 43.875 32.0627 43.875C30.1987 43.875 28.6875 45.386 28.6875 47.2503C28.6875 49.1144 30.1987 50.6253 32.0627 50.6253C33.9268 50.6253 35.4378 49.1144 35.4378 47.2503Z" 
       fill="white"
      />

    <Path
     d="M31.7263 64.1233C36.2428 68.3134 42.2911 70.875 48.9378 70.875C52.6493 70.875 56.1803 70.0748 59.3619 68.6353C63.614 69.6154 68.2094 70.4551 70.3232 70.8277C72.6496 71.2381 74.6692 69.1882 74.2065 66.8604C73.7984 64.8067 72.8966 60.4027 71.8767 56.2774C73.4002 53.0209 74.2503 49.3881 74.2503 45.5625C74.2503 34.4827 67.1315 25.0656 57.2181 21.6355C59.4695 25.7304 60.7503 30.4345 60.7503 35.4378C60.7503 51.2814 47.9064 64.125 32.0629 64.125C31.9506 64.125 31.8384 64.1247 31.7263 64.1233Z" 
     fill="white"/>
    </Svg>
  )
  
  export default KvizSvg