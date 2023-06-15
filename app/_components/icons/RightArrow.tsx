import { IconProps } from "../../_types/types";

const RightArrow: React.FC<IconProps> = ({ strokeColor }) => (
  <svg
    className={strokeColor}
    width="13"
    height="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m2 1 8 8-8 8"
      stroke={strokeColor}
      strokeWidth="3"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);
export default RightArrow;
