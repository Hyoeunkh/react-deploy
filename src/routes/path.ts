const basename = process.env.PUBLIC_URL || '';

export const RouterPath = {
  root: `${basename}/`,
  home: `${basename}/`,
  category: '/category/:categoryId',
  myAccount: '/my-account',
  orderList: '/order-list',
  productsDetail: '/products/:productId',
  order: '/order',
  login: '/login',
  signUp: '/signUp',
  notFound: '*',
};

export const getDynamicPath = {
  category: (categoryId: string) => RouterPath.category.replace(':categoryId', categoryId),
  productsDetail: (goodsId: number | string) =>
    RouterPath.productsDetail.replace(':productId', typeof goodsId === 'number' ? goodsId.toString() : goodsId),
};
