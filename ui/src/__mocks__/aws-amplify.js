const Amplify = {
  configure() {}
};

export const Auth = {
  signOutCalled: false,
  currentAuthenticatedUser() {
    return Promise.resolve({ attributes: { email: "sample@example.com" } });
  },
  signOut() {
    this.signOutCalled = true;
    return Promise.resolve({ attributes: { email: "" } });
  }
};

export default Amplify;
