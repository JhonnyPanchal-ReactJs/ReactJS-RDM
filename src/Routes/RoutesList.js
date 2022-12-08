import {URL_HOME_PAGE} from '../Helpers/Paths'
import Home from '../screen/Home/Home';
import Login from '../screen/Login';
const RoutesList = [

    {
        path: "/",
        exact: true,
        Component: <Login />
    },

    {
        path: URL_HOME_PAGE,
        exact: true,
        Component: <Home />
    },


];

export default RoutesList;