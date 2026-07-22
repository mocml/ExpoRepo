import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IcClockFive = (props) => (
  <Svg
    width={props?.width ?? 27}
    height={props?.height ?? 27}
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.5 0C20.956 0 27 6.044 27 13.5S20.956 27 13.5 27 0 20.956 0 13.5 6.044 0 13.5 0m0 5.4a1.35 1.35 0 0 0-1.35 1.35v6.75c0 .358.142.701.396.954l4.05 4.05a1.35 1.35 0 0 0 1.908-1.908L14.85 12.94V6.75A1.35 1.35 0 0 0 13.5 5.4"
      fill={props?.color ?? "#acaeb7"}
    />
  </Svg>
);
export default IcClockFive;
