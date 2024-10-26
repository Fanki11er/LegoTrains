export const paths = {
  accountRegistrationPath: "/Registration",
  loginPath: "/Login",
  resetPasswordPath: "/Reset",
  upgradeAccountPath: "/Upgrade",
  userDashboardRouterPath: "/User",
  legoSetRouterPath: "/Set/:id",
};

export const legoSetRouterNavigationPath = (id: string) => {
  return `/Set/${id}`;
};
