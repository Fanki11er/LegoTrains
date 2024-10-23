export const paths = {
  accountRegistrationPath: "/AccountRegistration",
  loginPath: "/Login",
  userDashboardRouterPath: "/User",
  legoSetRouterPath: "/Set/:id",
};

export const legoSetRouterNavigationPath = (id: string) => {
  return `/Set/${id}`;
};
