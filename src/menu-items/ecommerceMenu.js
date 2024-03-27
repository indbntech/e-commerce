// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const ecommerceMenu = {
  id: 'ecommerce',
  title: 'E-commerce',
  type: 'group',
  children: [
    {
      id: 'e-commerce',
      title: 'Ecommerce',
      type: 'item',
      url: 'ecommerce/ecommerceDashboard',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'product',
      title: 'Products',
      type: 'item',
      url: '/products',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'product-details',
      title: 'Product Details',
      type: 'item',
      url: '/productDetails',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'productList',
      title: 'Product List',
      type: 'item',
      url: '/products-list',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'checkout',
      title: 'Checkout',
      type: 'item',
      url: '/checkout',
      icon: icons.IconTypography,
      breadcrumbs: false
    },


    {
      id: 'Agriculture-Science',
      title: 'Agriculture Science',
      type: 'item',
      url: '/agriculture-cience',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'business-economics',
      title: 'Business & Economics',
      type: 'item',
      url: '/business-economics',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'art',
      title: 'Art',
      type: 'item',
      url: '/arts',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'computer',
      title: 'Computer',
      type: 'item',
      url: '/computer',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'education',
      title: 'Education',
      type: 'item',
      url: '/education',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    // {
    //   id: 'art',
    //   title: 'Icons',
    //   type: 'Art',
    //   icon: icons.IconWindmill,
    //   children: [
    //     {
    //       id: 'tabler-icons',
    //       title: 'Tabler Icons',
    //       type: 'item',
    //       url: '/icons/tabler-icons',
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'material-icons',
    //       title: 'Material Icons',
    //       type: 'item',
    //       external: true,
    //       target: '_blank',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       breadcrumbs: false
    //     }
    //   ]
    // }
  ]
};

export default ecommerceMenu;
