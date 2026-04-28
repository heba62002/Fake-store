// const BASE_URL = "https://fakestoreapi.com";

// export const getProducts = async () => {
//   const res = await fetch(`${BASE_URL}/products`);
//   return res.json();
// };

// export const getProduct = async (id) => {
//   const res = await fetch(`${BASE_URL}/products/${id}`);
//   return res.json();
// };

// export const addProduct = async (product) => {
//   const res = await fetch("https://fakestoreapi.com/products", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(product),
//   });
//   return res.json();
// };

// export const updateProduct = async (id, product) => {
//   const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(product),
//   });
//   return res.json();
// };

// export const deleteProduct = async (id) => {
//   const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
//     method: "DELETE",
//   });
//   return res.json();
// };


// export const getCategories = async () => {
//   const res = await fetch(`https://fakestoreapi.com/products/categories`);
//   return res.json();
// };

// export const getProductsByCategory = async (category) => {
//   const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
//   return res.json();
// };

// export const createCart = async (cartItems) => {
//   const res = await fetch("https://fakestoreapi.com/carts", {
//     method: "POST",
//     body: JSON.stringify({
//       userId: 1,
//       date: new Date(),
//       products: cartItems.map((item) => ({
//         productId: item.id,
//         quantity: 1,
//       })),
//     }),
//   });

//   return res.json();
// };

// export const login = async (username, password) => {
//   const res = await fetch("https://fakestoreapi.com/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//   });

//   return res.json();
// };

const BASE = "https://fakestoreapi.com";

// PRODUCTS
export const getProducts = async () =>
  fetch(`${BASE}/products`).then((r) => r.json());

export const getProduct = async (id) =>
  fetch(`${BASE}/products/${id}`).then((r) => r.json());

export const addProduct = async (data) =>
  fetch(`${BASE}/products`, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((r) => r.json());

export const updateProduct = async (id, data) =>
  fetch(`${BASE}/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  }).then((r) => r.json());

export const deleteProduct = async (id) =>
  fetch(`${BASE}/products/${id}`, {
    method: "DELETE",
  }).then((r) => r.json());

// AUTH
export const login = async (username, password) =>
  fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }).then((r) => r.json());

  export const createCart = async (cartItems) =>
  fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      date: new Date(),
      products: cartItems.map((i) => ({
        productId: i.id,
        quantity: 1,
      })),
    }),
  }).then((r) => r.json());

  export const getUsers = async () =>
  fetch("https://fakestoreapi.com/users").then((r) => r.json());

  export const getUser = async (id) =>
  fetch(`https://fakestoreapi.com/users/${id}`).then((r) => r.json());