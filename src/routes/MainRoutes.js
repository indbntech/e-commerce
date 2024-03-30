import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Products from 'views/ecommerce/Products';
import ProductTable from 'views/ecommerce/ProductTable';
import UserProfileTab from 'views/ecommerce/Checkout';
import ComplexGrid from 'views/sample-page/ComplexGrid';

import Category from 'views/ecommerce/categories/Category';
import AgricultureScience from 'views/ecommerce/categories/AgricultureScience';
import Art from 'views/ecommerce/categories/Art';
import Business from 'views/ecommerce/categories/Business';
import ChildrenBook from 'views/ecommerce/categories/ChildrenBook';
import Computers from 'views/ecommerce/categories/Computers';
import Dentistry from 'views/ecommerce/categories/Dentistry';
import Education from 'views/ecommerce/categories/Education';
import Engineering from 'views/ecommerce/categories/Engineering';
import GeneralMain from 'views/ecommerce/categories/GeneralMain';
import GovtPolicies from 'views/ecommerce/categories/GovtPolicies';
import Health from 'views/ecommerce/categories/Health';
import House from 'views/ecommerce/categories/House';
import Law from 'views/ecommerce/categories/Law';
import LifeSciences from 'views/ecommerce/categories/LifeSciences';
import Logistics from 'views/ecommerce/categories/Logistics';
import Medical from 'views/ecommerce/categories/Medical';
import Technology from 'views/ecommerce/categories/Technology';
import Misc from 'views/ecommerce/categories/Misc';
import Nature from 'views/ecommerce/categories/Nature';
import Reference from 'views/ecommerce/categories/Reference';
import SocialScience from 'views/ecommerce/categories/SocialScience';
import Science from 'views/ecommerce/categories/Science';


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
    },
    {
      path: 'category',
      element: <Category />
    },
    {
      path: 'agriculturescience',
      element: <AgricultureScience />
    },
    {
      path: 'art',
      element: <Art />
    },
    {
      path: 'business',
      element: <Business />
    },
    {
      path: 'childrenbook',
      element: <ChildrenBook />
    },
    {
      path: 'computers',
      element: <Computers />
    },
    {
      path: 'dentistry',
      element: <Dentistry />
    },
    {
      path: 'education',
      element: <Education />
    },
    {
      path: 'engineering',
      element: <Engineering />
    },
    {
      path: 'generalmain',
      element: <GeneralMain />
    },
    {
      path: 'govtpolicies',
      element: <GovtPolicies />
    },
    {
      path: 'health',
      element: <Health />
    },
    {
      path: 'house',
      element: <House />
    },
    {
      path: 'law',
      element: <Law />
    },
    {
      path: 'lifesciences',
      element: <LifeSciences />
    },
    {
      path: 'logistics',
      element: <Logistics />
    },
    {
      path: 'medical',
      element: <Medical />
    },
    {
      path: 'misc',
      element: <Misc />
    },
    {
      path: 'nature',
      element: <Nature />
    },
    {
      path: 'reference',
      element: <Reference />
    },
    {
      path: 'science',
      element: <Science />
    },
    {
      path: 'socialscience',
      element: <SocialScience />
    },
    {
      path: 'technology',
      element: <Technology />
    },
  ]
};

export default MainRoutes;
