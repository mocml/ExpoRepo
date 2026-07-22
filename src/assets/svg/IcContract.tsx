import { LegacyColors as Colors } from "@/constants/Colors";
import { metrics } from "@/utils/metrics";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IcContract = (props) => (
  <Svg
    width={props?.width ?? metrics.mScale(24)}
    height={props?.height ?? metrics.mScale(24)}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.666 10h6.667v1.666H6.666zm1.667 6.666H5V3.333h5.833V7.5H15v2.583l1.666-1.667v-1.75l-5-5H5a1.667 1.667 0 0 0-1.667 1.667v13.334A1.667 1.667 0 0 0 5 18.333h3.333zM6.666 15h3.417l.75-.75v-.917H6.666zm10.167-4.167c.083 0 .25.083.333.167l1.084 1.083c.166.167.166.5 0 .667l-.834.833-1.75-1.75L16.5 11c.083-.084.166-.167.333-.167m0 3.25-5.083 5.083H10v-1.75l5.083-5.083z"
      fill={props?.color ?? Colors.text}
      opacity={0.8}
    />
  </Svg>
);
export default IcContract;

