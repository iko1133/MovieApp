import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Home = ({ color = "#000", ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 16.838 16.87"
    {...props}
  >
    <Path
      data-name="Path 26809"
      d="M16.608 6.711L15.201 5.43l-5.4-4.9a2.117 2.117 0 00-2.814 0L1.605 5.454.198 6.734a.723.723 0 00-.188.352.709.709 0 00.032.394.726.726 0 00.241.316.71.71 0 00.373.134.7.7 0 00.471-.21l.232-.211v7.245a2.112 2.112 0 002.11 2.11h9.849a2.112 2.112 0 002.11-2.11V7.537l.232.211a.69.69 0 00.471.182.716.716 0 00.655-.45.7.7 0 00.027-.415.709.709 0 00-.205-.354z"
      fill={color}
    />
  </Svg>
);

export default Home;
