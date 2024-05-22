import App from "./App";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import OnePiece from "./OnePiece";
import JJK from "./JJk";
import TTIGRAAS from "./TTIGRAAS";

const routes = [
    {
        path:"/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/one-piece",
                element:<OnePiece />
            },
            {
                path:"/jujutsu-kaisen",
                element:<JJK />
            },
            {
                path:"/t-t-i-g-r-a-a-s",
                element:<TTIGRAAS />
            }

        ]
    }
]

export default routes