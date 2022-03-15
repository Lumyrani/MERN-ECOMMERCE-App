import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    show && (
      <div className={sideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links" onClick={click}>
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span>
                Cart <span className="sidedrawer__cartbadge">0</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">shop</Link>
          </li>
        </ul>
      </div>
    )
    //    <div className='sidedrawer'>SideDrawer</div>
  );
};

export default SideDrawer;
