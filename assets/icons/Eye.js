import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const Eye = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <G
      fill="none"
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="m12.109 7.892-4.217 4.217a2.982 2.982 0 1 1 4.217-4.217Z" />
      <Path
        data-name="Vector"
        d="M14.846 4.808A8.026 8.026 0 0 0 10 3.108c-2.941 0-5.683 1.733-7.592 4.733a4.438 4.438 0 0 0 0 4.325 11.939 11.939 0 0 0 2.259 2.642M7.017 16.275a7.679 7.679 0 0 0 2.983.617c2.942 0 5.683-1.733 7.592-4.733a4.438 4.438 0 0 0 0-4.325 13.518 13.518 0 0 0-.883-1.226"
      />
      <Path
        data-name="Vector"
        d="M12.925 10.583a2.971 2.971 0 0 1-2.35 2.35M7.892 12.108l-6.225 6.225M18.333 1.667l-6.225 6.225"
      />
    </G>
  </Svg>
);

export default Eye;
