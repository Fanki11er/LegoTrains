export const paths = {
  accountRegistrationPath: "/Registration",
  loginPath: "/Login",
  resetPasswordPath: "/Reset",
  upgradeAccountPath: "/Upgrade",
  userDashboardRouterPath: "/Dashboard",
  legoSetRouterPath: "/Set/:id",
};

export const legoSetRouterNavigationPath = (id: string) => {
  return `/Set/${id}`;
};
