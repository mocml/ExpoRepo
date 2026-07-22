import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const IcKeyPass = (props) => (
  <Svg
    width={props?.width ?? 43}
    height={props?.height ?? 43}
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M37.625 17.917h-14.96a10.73 10.73 0 0 0-10.123-7.167c-5.93 0-10.75 4.82-10.75 10.75s4.82 10.75 10.75 10.75a10.73 10.73 0 0 0 10.123-7.167h.627l3.583 3.584 3.583-3.584 3.584 3.584 7.166-7.239zm-25.083 8.958c-2.956 0-5.375-2.419-5.375-5.375s2.419-5.375 5.375-5.375 5.375 2.419 5.375 5.375-2.419 5.375-5.375 5.375"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-11.097}
        y1={41.613}
        x2={16.298}
        y2={26.008}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#b19665" />
        <Stop offset={1} stopColor="#eca827" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default IcKeyPass;
