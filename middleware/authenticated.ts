/**
 * A middleware that only allows authenticated users to visit the new route.
 *
 * If a user is not authenticated, they are redirected to the login-required page which asks the user to sign in and
 * sent to the original destination after successful authentication.
 */
export default defineNuxtRouteMiddleware(async (to) => {
  const userManager = useUserManager();

  if (await userManager.getUser() == null) {
    return navigateTo({ name: "login-required", query: { "next": to.fullPath } })
  }
});
