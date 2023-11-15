import {UserManager} from "oidc-client-ts";

let userManager: UserManager | null = null;

function initUserManager() {
    const runtimeConfig = useRuntimeConfig();
    const appConfig = useAppConfig();

    const callbackUri = new URL(window.location.href)
    callbackUri.pathname = "/auth/openid/login-callback";
    callbackUri.hash = "";
    callbackUri.search = "";

    userManager = new UserManager({
        authority: runtimeConfig.public.openidIssuer,
        client_id: runtimeConfig.public.openidClientId,
        redirect_uri: callbackUri.href,
        scope: appConfig.mafiasi.openidScopes,
    });
}

export function useUserManager(): UserManager {
    if (userManager == null) {
        initUserManager();
    }
    return userManager as UserManager
}
