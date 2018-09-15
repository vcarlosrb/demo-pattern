export const HttpApi = {
    // User
    user: {
        getById: (id: string) => `/users/${id}`
    },
    // Product
    product: {
        search: (item: string) => `http://galeria.preview.pe/index.php/inicio/pacasmayo?producto=${item}`
    }
}
  