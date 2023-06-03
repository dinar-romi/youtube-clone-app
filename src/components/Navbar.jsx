import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import { logo } from "../utils/constants";
import zIndex from "@mui/material/styles/zIndex";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: "#000", top: "0", justifyContent: "space-between", zIndex: "5" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>

    <SearchBar />
  </Stack>
);

export default Navbar;
