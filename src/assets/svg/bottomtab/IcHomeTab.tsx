import { LegacyColors as Colors } from "@/constants/Colors";
import { metrics } from "@/utils/metrics";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IcHomeTab = (props) => (
  <Svg
    width={props?.width ?? metrics.mScale(24)}
    height={props?.height ?? metrics.mScale(24)}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.938 16.581H8.922"
      stroke={props?.color ?? Colors.icon}
      strokeWidth={1.948}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M16.667 21.875H8.334a5.21 5.21 0 0 1-5.209-5.208v-5A5.21 5.21 0 0 1 5.08 7.6l4.167-3.334a5.21 5.21 0 0 1 6.507 0L19.921 7.6a5.2 5.2 0 0 1 1.954 4.067v5a5.21 5.21 0 0 1-5.208 5.208"
      stroke={props?.color ?? Colors.icon}
      strokeWidth={1.82}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default IcHomeTab;
