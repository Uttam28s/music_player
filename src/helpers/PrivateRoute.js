import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
    const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    // return isLoggedIn ? children : keycloak.login();
    return children
};

export default PrivateRoute;