import React from "react";
import { CartActiveIcon, CartIcon, HomeActiveIcon, HomeIcon, ProfileActiveIcon, ProfileIcon } from "../../../helper/Icon";


const getIconFont = (type: React.ReactNode) => {
  switch (type) {
    case "HomeIcon":
      return HomeIcon;
    case "HomeActiveIcon":
      return HomeActiveIcon;
    case "CartIcon":
      return CartIcon;
    case "CartActiveIcon":
      return CartActiveIcon;
    case "ProfileIcon":
      return ProfileIcon;
    case "ProfileActiveIcon":
      return ProfileActiveIcon;

    default:
      return HomeIcon;
  }
};
const Icon = ({ type, ...props }) => {
  const IconFont = getIconFont(type);
  return <IconFont {...props} />;
};
export default Icon;
