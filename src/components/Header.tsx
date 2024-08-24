import Icon from "./Icon";
import Clock from '../modules/Clock';
import { Link } from "react-router-dom";

const iconstyle = "material-symbols-rounded text-6xl m-2 p-1 rounded-xl shadow-md shadow-gray hover:bg-gray-200 hover:shadow-lg";

const MainHeader = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="w-1/3">
          <div className="flex">
            <Link to="/"><Icon iconstyle={iconstyle} icon="calendar_month" /></Link>
            <Link to="/list"><Icon iconstyle={iconstyle} icon="format_list_bulleted" /></Link>
            <Link to="/todo"><Icon iconstyle={iconstyle} icon="pending_actions" /></Link>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex justify-end items-center">
            <div className="text-2xl mr-8">
              <Clock />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainHeader;