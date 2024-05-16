import AmericanLeague from "./AmericanLeague";
import App from "./App";
import Home from "./Home";
import NationalLeague from "./NationalLeague";

const routes = [
    {
        path:"/",
        element: <App />,
        children: [
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/american-league",
                element: <AmericanLeague />
            },
            {
                path:"/national-league",
                element: <NationalLeague />
            }
        ]
    }
]

export default routes