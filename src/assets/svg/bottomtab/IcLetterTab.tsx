import { LegacyColors as Colors } from "@/constants/Colors";
import { metrics } from "@/utils/metrics";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IcLetterTab = (props) => (
  <Svg
    width={props?.width ?? metrics.mScale(24)}
    height={props?.height ?? metrics.mScale(24)}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.125 14.583v-4.166c0-3.929 0-5.893 1.221-7.113 1.22-1.22 3.184-1.22 7.113-1.22h2.083c3.928 0 5.893 0 7.112 1.22.682.68.983 1.592 1.115 2.946m.106 4.167v4.166c0 3.928 0 5.893-1.22 7.113-1.221 1.22-3.185 1.22-7.113 1.22h-2.083c-3.929 0-5.893 0-7.113-1.22-.681-.68-.982-1.592-1.115-2.946m5.103-4.167h5.208m-5.208-4.166h1.041m7.292 0H12.5"
      stroke={props?.color ?? Colors.icon}
      strokeWidth={1.82}
      strokeLinecap="round"
    />
  </Svg>
);
export default IcLetterTab;
