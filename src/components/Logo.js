import React from "react";
import PropTypes from "prop-types";
import { Theme } from "../styles/globalStyles";

const Logo = (props) => {
  const { mode } = props || {};

  return (
    <svg
      width="70"
      height="53"
      viewBox="0 0 661 502"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="shopping-cart">
        <g id="Vector">
          <path
            d="M258.253 11.2043C259.259 4.7551 264.813 0 271.34 0C279.185 0 285.311 6.78042 284.517 14.5851L283 29.5C281.395 45.2858 293.785 59 309.652 59H623.36C650.315 59 668.223 86.8989 657 111.406L532.89 382.406C526.864 395.563 513.721 404 499.249 404H240.217C217.51 404 200.16 383.735 203.659 361.299L258.253 11.2043Z"
            fill={Theme[mode].colors.icons}
          />
          <path
            d="M301.438 477.974C291.045 497.78 269.338 506.867 252.955 498.27C236.572 489.673 231.717 466.648 242.11 446.841C252.504 427.035 274.21 417.948 290.593 426.545C306.976 435.142 311.831 458.168 301.438 477.974Z"
            fill={Theme[mode].colors.icons}
          />
          <path
            d="M453.164 478.066C442.771 497.872 421.064 506.959 404.681 498.362C388.299 489.765 383.443 466.74 393.836 446.934C404.23 427.128 425.936 418.041 442.319 426.638C458.702 435.235 463.557 458.26 453.164 478.066Z"
            fill={Theme[mode].colors.icons}
          />
          <path
            d="M13.1819 107.243C14.285 104.669 16.8157 103 19.6159 103H145.544C150.528 103 153.915 108.06 152.016 112.667C150.936 115.289 148.38 117 145.544 117H19.6159C14.5905 117 11.2023 111.862 13.1819 107.243Z"
            fill={Theme[mode].colors.icons}
          />
          <path
            d="M1.18192 291.243C2.28498 288.669 4.81574 287 7.61594 287H133.544C138.528 287 141.915 292.06 140.016 296.667C138.936 299.289 136.38 301 133.544 301H7.61592C2.59052 301 -0.797681 295.862 1.18192 291.243Z"
            fill={Theme[mode].colors.icons}
          />
          <path
            d="M48.1819 206.243C49.285 203.669 51.8157 202 54.6159 202H180.544C185.528 202 188.915 207.06 187.016 211.667C185.936 214.289 183.38 216 180.544 216H54.6159C49.5905 216 46.2023 210.862 48.1819 206.243Z"
            fill={Theme[mode].colors.icons}
          />
        </g>
        <g id="Vector_2">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M609.954 83.7165C611.63 83.2841 613.408 83.7938 614.6 85.0479L625.259 96.2614C626.422 97.485 626.851 99.2327 626.385 100.856L622.037 116.031C621.572 117.653 620.282 118.909 618.647 119.331L603.667 123.196C601.992 123.629 600.214 123.119 599.022 121.865L588.363 110.652C587.2 109.428 586.771 107.68 587.236 106.058L591.585 90.8825C592.05 89.2597 593.339 88.0044 594.974 87.5825C594.974 87.5825 594.974 87.5825 594.974 87.5825L609.954 83.7165ZM613.15 86.4258C612.459 85.6979 611.426 85.4021 610.454 85.6531L595.474 89.5191C594.525 89.7639 593.777 90.4922 593.508 91.4335L589.159 106.609C588.889 107.55 589.138 108.564 589.813 109.274L600.471 120.487C601.163 121.215 602.195 121.511 603.168 121.26L618.148 117.394C618.148 117.394 618.148 117.394 618.148 117.394C619.096 117.149 619.844 116.421 620.114 115.48L624.463 100.305C624.733 99.3634 624.484 98.3494 623.809 97.6393C623.809 97.6393 623.809 97.6393 623.809 97.6393L613.15 86.4258Z"
            fill="white"
          />
          <path
            d="M596.122 111.646V110.979L596.985 110.831V104.76L596.122 104.612V103.94H599.141C599.822 103.94 600.415 104.102 600.92 104.427C601.428 104.751 601.823 105.198 602.106 105.766C602.388 106.334 602.529 106.983 602.529 107.713V107.878C602.529 108.59 602.393 109.233 602.122 109.804C601.85 110.372 601.463 110.822 600.962 111.154C600.464 111.482 599.875 111.646 599.193 111.646H596.122ZM598.029 110.831H599.141C599.628 110.831 600.046 110.699 600.395 110.434C600.745 110.166 601.013 109.81 601.2 109.365C601.391 108.917 601.486 108.421 601.486 107.878V107.703C601.486 107.142 601.391 106.641 601.2 106.2C601.013 105.755 600.745 105.404 600.395 105.146C600.046 104.889 599.628 104.76 599.141 104.76H598.029V110.831ZM603.302 111.646V110.979L604.165 110.831V104.76L603.302 104.612V103.94H609.01V105.792H608.174L608.057 104.744H605.209V107.253H608.052V108.073H605.209V110.863H608.227L608.343 109.799H609.175V111.646H603.302ZM613.331 111.646L610.747 104.697L610.133 104.612V103.94H612.569V104.612L611.864 104.723L613.591 109.624L613.771 110.233H613.802L613.993 109.624L615.783 104.718L614.999 104.612V103.94H617.429V104.612L616.81 104.697L614.226 111.646H613.331Z"
            fill="white"
          />
          <path
            d="M596.899 102.036V101.48L597.619 101.357V96.2976L596.899 96.174V95.6139H599.207V96.174L598.488 96.2976V101.357L599.207 101.48V102.036H596.899ZM600.262 97.6561L599.768 97.3297C599.906 97.1209 600.01 96.9077 600.081 96.6901C600.152 96.4695 600.187 96.2328 600.187 95.98V95.1551H601.056V95.9667C601.056 96.2608 600.984 96.5651 600.84 96.8798C600.699 97.1944 600.506 97.4532 600.262 97.6561ZM601.828 102.036V101.48L602.547 101.357V96.2976L601.828 96.174V95.6139H603.708L605.777 100.488H605.804L607.807 95.6139H609.744V96.174L609.025 96.2976V101.357L609.744 101.48V102.036H607.437V101.48L608.195 101.357V96.8004L608.173 96.796L606.086 101.807H605.508L603.351 96.8048L603.328 96.8092L603.359 99.4954V101.357L604.136 101.48V102.036H601.828ZM610.468 102.036V101.48L610.944 101.414L613.19 95.6139H613.936L616.142 101.414L616.615 101.48V102.036H614.77V101.48L615.255 101.396L614.832 100.214H612.259L611.823 101.396L612.308 101.48V102.036H610.468ZM612.529 99.4865H614.567L613.623 96.8754L613.57 96.7298H613.543L613.49 96.8754L612.529 99.4865Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};

Logo.propTypes = {
  mode: PropTypes.string,
};

export default Logo;
