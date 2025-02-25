import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  //   console.log(location);

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  console.log(currentLink);

  return (
    <div className="breadcrumbs">
      <div className="crumb">
        <Link to="/">home</Link>
      </div>
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;
