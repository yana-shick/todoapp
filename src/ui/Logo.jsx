import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to="/">
      <img src="/logo.svg" alt="logo" />
    </NavLink>
  );
}
