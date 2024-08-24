import { Link } from "react-router-dom"

import Icon from './Icon'

const iconstyle = "material-symbols-rounded text-6xl m-2 p-1 rounded-xl shadow-md shadow-gray hover:bg-gray-200 hover:shadow-lg";

const Footer = () => {
    return (
        <>
            <section className="flex items-center justify-between">
                <div className="w-1/3">
                    <div className="flex justify-start items-center">
                        <Link to="/"><Icon iconstyle={iconstyle} icon="add" /></Link>
                        <Link to="/list"><Icon iconstyle={iconstyle} icon="keyboard" /></Link>

                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex justify-end items-center">
                        <Link to="/"><Icon iconstyle={iconstyle} icon="arrow_back" /></Link>
                        <Link to="/list"><Icon iconstyle={iconstyle} icon="arrow_forward" /></Link>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
