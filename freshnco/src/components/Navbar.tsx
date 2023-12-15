import DarkModeToggle from "./DarkModeToggle";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

function NavBar() {
  let navigate = useNavigate();
  let tab = localStorage.getItem("livetab");
  let auth = localStorage.getItem("auth");
  let name = localStorage.getItem("name") ?? "";
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    let txt = e.currentTarget.textContent;
    if (txt === "Login") {
      navigate("/login");
    }
  };
  let count = 2;
  const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    "& .MuiBadge-badge": {
      right: -3,
      fontWeight: "600",
      top: 14,
      border: `2px solid var(--bgcolor)`,
      padding: "1.5px 2px 1.5px 1.5px",
      color: "var(--textcolor)",
      backgroundColor: "var(--btncolor)",
    },
  }));
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand">Fresh & Co.</span>
          <span className="dm">
            <DarkModeToggle />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav" id="navlinks">
              <Link to="/">
                <li className="nav-item">
                  <span
                    className={`nav-link ${tab === "home" ? "live" : ""}`}
                    aria-current="page"
                  >
                    Home
                  </span>
                </li>
              </Link>
              <Link to={auth === "true" ? "/products" : "/login"}>
                <li className="nav-item">
                  <span
                    className={`nav-link align-text-bottom ${
                      tab === "products" ? "live" : ""
                    }`}
                  >
                    Products
                  </span>
                </li>
              </Link>
              <li className="nav-item">
                <span
                  style={{ paddingTop: "0" }}
                  className={`nav-link bag align-text-bottom ${
                    tab == "cart" ? "live" : ""
                  }`}
                >
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={count}>
                      <LocalMallIcon
                        style={{
                          color: `${
                            tab === "cart"
                              ? "var(--btncolor)"
                              : "var(--iconcolor)"
                          }`,
                        }}
                      />
                    </StyledBadge>
                  </IconButton>
                </span>
              </li>

              <li className="nav-item dropdown">
                <span
                  className={`nav-link`}
                  id={auth === "true" ? "nav-account" : "nav-login"}
                  onClick={handleClick}
                >
                  {auth === "true" ? (
                    <Avatar
                      sx={{
                        bgcolor: "var(--btncolor)",
                        fontFamily: "var(--body-font)",
                        fontWeight: "600",
                        height: 30,
                        width: 30,
                        fontSize: "0.9rem",
                      }}
                    >
                      {name.charAt(0)}
                    </Avatar>
                  ) : (
                    "Login"
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
