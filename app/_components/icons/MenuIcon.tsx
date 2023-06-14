import IconProps from "../../_types/types";

const MenuIcon: React.FC<IconProps> = ({ fillColor }) => (
  <svg
    className={fillColor}
    width="16"
    height="15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
      fill={fillColor}
      fill-rule="evenodd"
    />
  </svg>
);
export default MenuIcon;
