import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>404, Page Not Found</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
