import React from 'react';

interface Icons {
    icon: string;
    iconstyle: string;
}

const Icon: React.FC<Icons> = ({ icon, iconstyle }) => {
    return (
        <div >
            <span className={iconstyle}>{icon}</span>
        </div>
    )
}

export default Icon
