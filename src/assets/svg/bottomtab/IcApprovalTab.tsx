import { LegacyColors as Colors } from "@/constants/Colors";
import { metrics } from "@/utils/metrics";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IcApprovalTab = (props) => (
  <Svg
    width={props?.width ?? metrics.mScale(24)}
    height={props?.height ?? metrics.mScale(24)}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.083 12.5c0-3.928 0-5.893 1.221-7.113s3.185-1.22 7.113-1.22h4.166c3.929 0 5.893 0 7.113 1.22 1.22 1.221 1.22 3.185 1.22 7.113s0 5.893-1.22 7.113c-1.221 1.22-3.184 1.22-7.113 1.22h-4.166c-3.928 0-5.893 0-7.113-1.22-1.22-1.221-1.22-3.185-1.22-7.113Z"
      stroke={props?.color ?? Colors.icon}
      strokeWidth={1.5}
    />
    <Path
      d="m6.25 8.333 2.249 1.875c1.913 1.594 2.87 2.39 4.001 2.39s2.089-.796 4.001-2.39l2.249-1.875"
      stroke={props?.color ?? Colors.icon}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default IcApprovalTab;
