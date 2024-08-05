import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { RouterPath } from './path';

import { Layout } from '@/components/features/Layout';
import { CategoryPage } from '@/pages/Category';
import { GoodsDetailPage } from '@/pages/Goods/Detail';
import { HomePage } from '@/pages/Home';
import { LoginPage } from '@/pages/Login';
import { MyAccountPage } from '@/pages/MyAccount';
import { OrderPage } from '@/pages/Order';
import { OrderListPage } from '@/pages/OrderList';
import { SignUpPage } from '@/pages/SignUp';

const router = createBrowserRouter(
  [
    {
      path: RouterPath.root,
      element: <Layout />,
      children: [
        {
          path: RouterPath.home,
          element: <HomePage />,
        },
        {
          path: RouterPath.category,
          element: <CategoryPage />,
        },
        {
          path: RouterPath.productsDetail,
          element: <GoodsDetailPage />,
        },
        {
          path: RouterPath.myAccount,
          element: <PrivateRoute />,
          children: [
            {
              path: RouterPath.myAccount,
              element: <MyAccountPage />,
            },
          ],
        },
        {
          path: RouterPath.order,
          element: <PrivateRoute />,
          children: [
            {
              path: RouterPath.order,
              element: <OrderPage />,
            },
          ],
        },
        {
          path: RouterPath.orderList,
          element: <PrivateRoute />,
          children: [
            {
              path: RouterPath.orderList,
              element: <OrderListPage />,
            },
          ],
        },
        {
          path: RouterPath.notFound,
          element: <Navigate to={RouterPath.home} />,
        },
      ],
    },
    {
      path: RouterPath.login,
      element: <LoginPage />,
    },
    {
      path: RouterPath.signUp,
      element: <SignUpPage />,
    },
  ],
  { basename: process.env.REACT_APP_PUBLIC_URL },
);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
