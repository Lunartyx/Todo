import { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId
            = setInterval(() => {
                setTime(new Date().toLocaleTimeString());

            }, 1000); // Update every second

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="min-w-min font-kode">
            {time}
        </div>
    );
};

export default Clock;