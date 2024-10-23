export const paths = {
  userDashboardRouterPath: "/User",
  legoSetRouterPath: "/Set/:id",
  accountRegistrationPath: "/AccountRegistration",
};

export const legoSetRouterNavigationPath = (id: string) => {
  return `/Set/${id}`;
};
