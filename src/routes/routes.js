import { createBrowserRouter } from "react-router-dom";
import ShowDashboard from "../components/ShowDashboard";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <ShowDashboard></ShowDashboard>
    }
])
export default routes;