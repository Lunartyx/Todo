import { Link } from "react-router-dom";
import { useState } from "react";

import Icon from "./Icon";
import PopInBanner from "../components/PopInBanner";

const iconstyle = "material-symbols-rounded text-6xl m-2 p-1 rounded-xl shadow-md shadow-gray hover:bg-gray-200 hover:shadow-lg";

const Footer = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(false);

    const openBanner = () => {
        setIsBannerVisible(true);
    };

    const closeBanner = () => {
        setIsBannerVisible(false);
    };

    return (
        <>
            <section className="flex items-center justify-between">
                <div className="w-1/3">
                    <div className="flex justify-start items-center">
                        <button onClick={openBanner}>
                            <Icon iconstyle={iconstyle} icon="add" />
                        </button>
                        <Link to="/">
                            <Icon iconstyle={iconstyle} icon="keyboard" />
                        </Link>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex justify-end items-center">
                        <Link to="/">
                            <Icon iconstyle={iconstyle} icon="arrow_back" />
                        </Link>
                        <Link to="/">
                            <Icon iconstyle={iconstyle} icon="arrow_forward" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* PopInBanner Component */}
            <PopInBanner isVisible={isBannerVisible} closeBanner={closeBanner} />
        </>
    );
};

export default Footer;
