interface PopInBanner {
    isVisible: boolean;
    closeBanner: () => void;
}

const PopInBanner: React.FC<PopInBanner> = ({ isVisible, closeBanner }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 pointer-events-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto pointer-events-none">
                <div className="pointer-events-auto">
                    <h2 className="text-2xl font-semibold mb-6">Dear Future Developer</h2>
                    <p className="mb-8 text-lg">
                        Dont be an idiot and hardcode something in this component. it will be reused for ANY edits in the events
                    </p>
                    <button
                        onClick={closeBanner}
                        className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopInBanner;
