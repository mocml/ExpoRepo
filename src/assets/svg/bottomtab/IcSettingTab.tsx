import { LegacyColors as Colors } from "@/constants/Colors";
import { metrics } from "@/utils/metrics";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IcSettingTab = (props) => (
  <Svg
    width={props?.width ?? metrics.mScale(24)}
    height={props?.height ?? metrics.mScale(24)}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.297 10.156a2.735 2.735 0 1 0 0 5.47 2.735 2.735 0 0 0 0-5.47m0 1.563a1.172 1.172 0 1 1 0 2.343 1.172 1.172 0 0 1 0-2.343m8.203-1.563a2.734 2.734 0 1 1 0 5.469 2.734 2.734 0 0 1 0-5.469m0 1.563a1.171 1.171 0 1 0 0 2.343 1.171 1.171 0 0 0 0-2.343m8.203-1.563a2.734 2.734 0 1 1 0 5.469 2.734 2.734 0 0 1 0-5.469m0 1.563a1.172 1.172 0 1 0 0 2.343 1.172 1.172 0 0 0 0-2.343"
      fill={props?.color ?? Colors.icon}
    />
  </Svg>
);
export default IcSettingTab;
