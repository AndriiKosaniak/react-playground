export const routes = {
  home: "/",
  about: {
    path: "/about/*",
    link: "/about",
    children: {
      legal: {
        path: "/about/legal",
      },
    },
  },
  users: "/users",
  products: "/products",
  product: "/products/:id",
  wishlist: "/wishlist",
};
