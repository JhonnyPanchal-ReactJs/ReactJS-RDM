import {URL_AlertManageMent, URL_CoolingTowerManageMent, URL_CustomerManageMent, URL_HOME_PAGE, URL_PropertyManagement,  URL_ReportManagement} from '../Helpers/Paths'
import Home from '../screen/Home/Home';
import Login from '../screen/Login';
import AlertManagement from '../screen/Management/Alert/AlertManagement';
import CoolingTowerManagement from '../screen/Management/CoolingTower/CoolingTowerManagement';
import CustomerManagement from '../screen/Management/Customer/CustomerManagement';
import PropertyManagement from '../screen/Management/Property/PropertyManagement';
import Reports from '../screen/Reports/Reports';
const RoutesList = [

    {
        path: "/login",
        exact: true,
        Component: <Login />
    },

    {
        path: "/",
        exact: true,
        Component: <Home />
    },
    {
        path: URL_HOME_PAGE,
        exact: true,
        Component: <Home />
    },
    {
        path: URL_AlertManageMent,
        exact: true,
        Component: <AlertManagement />
    },
    {
        path: URL_CustomerManageMent,
        exact: true,
        Component: <CustomerManagement />
    },
    {
        path: URL_CoolingTowerManageMent,
        exact: true,
        Component: <CoolingTowerManagement />
    },
    {
        path: URL_PropertyManagement,
        exact: true,
        Component: <PropertyManagement />
    },
    {
        path: URL_ReportManagement,
        exact: true,
        Component: <Reports />
    },


];

export default RoutesList;