import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://localhost:8080/auth",
    realm: "Music_app",
    clientId: "music-app-client",
});

export default keycloak;