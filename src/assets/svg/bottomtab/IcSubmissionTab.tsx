import { LegacyColors as Colors } from "@/constants/Colors";
import { metrics } from "@/utils/metrics";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IcSubmissionTab = (props) => (
  <Svg
    width={props?.width ?? metrics.mScale(24)}
    height={props?.height ?? metrics.mScale(24)}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.792 20.833H5.209c-1.667 0-2.084-1.388-2.084-2.083V6.25A2.083 2.083 0 0 1 5.21 4.167h10.416A2.083 2.083 0 0 1 17.71 6.25v6.25m2.083 8.333c-.695 0-2.083-.416-2.083-2.083V12.5m2.083 8.333c1.667 0 2.083-1.388 2.083-2.083V12.5H17.71"
      stroke={props?.color ?? Colors.icon}
      strokeWidth={1.82}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default IcSubmissionTab;