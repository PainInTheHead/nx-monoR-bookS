export const appRoutes = {
  homePath: '/',
  profilePath: '/profile',
  bookPath: '/book/:id',
  getBookURL: (id: number) => `/book/${id}`,
  cartPath: 'cart',
  favoritesPath: 'favorites',
  registrationPath: '/registration',
  loginPath: '/login',
};
