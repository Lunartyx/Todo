import Icon from "./Icon";
import Clock from '../modules/Clock';

const iconstyle = "material-symbols-rounded text-6xl m-2 p-1 rounded-xl shadow-md shadow-gray hover:bg-gray-200 hover:shadow-lg";

const MainHeader = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="w-1/3">
          <div className="flex">
            <Icon iconstyle={iconstyle} icon="calendar_month" />
            <Icon iconstyle={iconstyle} icon="format_list_bulleted" />
            <Icon iconstyle={iconstyle} icon="pending_actions" />
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex justify-end items-center">
            <div className="text-2xl">
              <Clock />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainHeader;