import { LegacyColors as Colors } from "@/constants/Colors";
import { metrics } from "@/utils/metrics";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IcUser = (props) => (
  <Svg
    width={props?.width ?? metrics.mScale(28)}
    height={props?.height ?? metrics.mScale(28)}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.68 8.444a4.444 4.444 0 1 1 8.89 0 4.444 4.444 0 0 1-8.89 0m0 6.667a5.555 5.555 0 0 0-5.555 5.556A3.333 3.333 0 0 0 7.458 24h13.334a3.333 3.333 0 0 0 3.333-3.333 5.555 5.555 0 0 0-5.556-5.556z"
      fill={props.color ?? Colors.white}
    />
  </Svg>
);
export default IcUser;
