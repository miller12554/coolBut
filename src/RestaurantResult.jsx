import { Link, useLocation } from "react-router-dom";

// import backicon from "../assets/backicon.png";

const Restaurant_result = () => {
  const location = useLocation();

  return (
    <div>
      <Link to="/restaurant_list">
        icon
        {/* <img className="backicon" src={backicon} alt="backicon" /> */}
      </Link>
      <div className="rst_result_prom" />
      <div className="rst_result_cell">
        <div>
          <div className="rst_result_name">{location.state.data.restName}</div>
          <div className="rst_result_position">
            {location.state.data.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant_result;
