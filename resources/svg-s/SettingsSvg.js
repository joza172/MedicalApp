import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SettingsSvg = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 100 100'
    {...props}
  >
    <Path
      d="M50.0516 9.375C53.11 9.41025 56.1562 9.76358 59.1412 10.4293C60.4445 10.72 61.4191 11.8063 61.567 13.1332L62.2762 19.495C62.597 22.4161 65.0633 24.6285 68.0037 24.6316C68.7937 24.6328 69.5758 24.4682 70.3058 24.1451L76.142 21.5815C77.3558 21.0483 78.7737 21.339 79.68 22.3067C83.8975 26.811 87.0383 32.2131 88.8662 38.1066C89.2604 39.3774 88.807 40.7585 87.7358 41.5479L82.5629 45.3608C81.0875 46.445 80.2158 48.1667 80.2158 49.9979C80.2158 51.8288 81.0875 53.5504 82.5662 54.6371L87.7437 58.4512C88.815 59.2404 89.2691 60.6217 88.8745 61.8929C87.0475 67.7854 83.9083 73.1871 79.6933 77.6921C78.7879 78.6596 77.3708 78.9512 76.157 78.4192L70.2975 75.8521C68.6212 75.1183 66.6958 75.2258 65.1116 76.1417C63.5275 77.0571 62.4729 78.6717 62.2716 80.4904L61.567 86.8517C61.422 88.1633 60.4683 89.2425 59.1845 89.5479C53.1491 90.9837 46.8612 90.9837 40.8261 89.5479C39.5423 89.2425 38.5887 88.1633 38.4434 86.8517L37.74 80.5C37.5334 78.6846 36.4774 77.075 34.8944 76.1625C33.3114 75.25 31.3893 75.1429 29.7185 75.8725L23.8575 78.44C22.6435 78.9721 21.2261 78.6804 20.3209 77.7121C16.1036 73.2021 12.9643 67.7937 11.1393 61.895C10.7463 60.6246 11.2004 59.2442 12.2712 58.4554L17.4517 54.6387C18.9273 53.5546 19.7988 51.8329 19.7988 50.0021C19.7988 48.1708 18.9273 46.4492 17.4498 45.3637L12.2725 41.5535C11.2001 40.7644 10.7455 39.3824 11.14 38.1107C12.9681 32.2173 16.1091 26.8152 20.3265 22.3109C21.2326 21.3432 22.6507 21.0525 23.8645 21.5857L29.6994 24.1488C31.3783 24.8857 33.3085 24.7744 34.9 23.8445C36.4847 22.9254 37.5397 21.3092 37.7433 19.4902L38.452 13.1332C38.6 11.8056 39.5754 10.7189 40.8793 10.4289C43.8679 9.76425 46.9175 9.41104 50.0516 9.375ZM49.9995 37.4998C43.0962 37.4998 37.4997 43.0962 37.4997 50C37.4997 56.9033 43.0962 62.5 49.9995 62.5C56.9033 62.5 62.4995 56.9033 62.4995 50C62.4995 43.0962 56.9033 37.4998 49.9995 37.4998Z" 
      fill="#7F40B0"
    />
  </Svg>
)

export default SettingsSvg
