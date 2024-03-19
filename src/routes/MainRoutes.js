import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Products from 'views/ecommerce/Products';
import ProductTable from 'views/ecommerce/ProductTable';
import UserProfileTab from 'views/ecommerce/Checkout';
import ComplexGrid from 'views/sample-page/ComplexGrid';


// dashboard routing
//const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing

const EcommerceDashboard = Loadable(lazy(() => import('views/ecommerce/EcommerceDashboard')));


// sample page routing
//const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <EcommerceDashboard />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <EcommerceDashboard />
        }
      ]
    },
    {
      path: 'ecommerce',
      children: [
        {
          path: 'ecommerceDashboard',
          element: <EcommerceDashboard/>
        }
      ]
    },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-typography',
    //       element: <UtilsTypography />
    //     }
    //   ]
    // },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-color',
    //       element: <UtilsColor />
    //     }
    //   ]
    // },
    // {
    //   path: 'utils',
    //   children: [
    //     {
    //       path: 'util-shadow',
    //       element: <UtilsShadow />
    //     }
    //   ]
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'tabler-icons',
    //       element: <UtilsTablerIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'material-icons',
    //       element: <UtilsMaterialIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'sample-page',
    //   element: <SamplePage />
    // }
    
    {
      path: 'products',
      element: <Products />
    },
    {
      path: 'productDetails',
      element: <ComplexGrid />
    },
    {
      path: 'products-list',
      element: <ProductTable />
    },
    {
      path: 'checkout',
      element: <UserProfileTab />
    }
  ]
};

export default MainRoutes;
