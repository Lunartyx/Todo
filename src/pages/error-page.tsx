import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <div className="my-auto">
                <h1 className="font-h1 text-9xl text-center">Whoooopss...</h1>
                <p className="font-p text-2xl text-center">Sorry, an unexpected error has occurred.</p>
            </div>
        </div>
    );
}