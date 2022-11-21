import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

function Logout(props) {
  return (
    <Link to="/login">
      <LogoutIcon onClick={props.onLogout} />
    </Link>
  );
}

export default Logout;
