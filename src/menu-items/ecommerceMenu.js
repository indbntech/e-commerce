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
  title: 'NBS Menu',
  type: 'group',
  children: [
    {
      id: 'e-commerce',
      title: 'Home Page',
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
    // {
    //   id: 'product-details',
    //   title: 'Product Details',
    //   type: 'item',
    //   url: '/productDetails',
    //   icon: icons.IconTypography,
    //   breadcrumbs: false
    // },
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
      id: 'category',
      title: 'Category',
      type: 'item',
      url: '/category',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'agriculturescience',
      title: 'Agriculture Science',
      type: 'item',
      url: '/agriculturescience',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'art',
      title: 'Art',
      type: 'item',
      url: '/art',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'business',
      title: 'Business',
      type: 'item',
      url: '/business',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'childrenbook',
      title: 'Children Book',
      type: 'item',
      url: '/childrenbook',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'computers',
      title: 'Computers',
      type: 'item',
      url: '/computers',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'dentistry',
      title: 'Dentistry',
      type: 'item',
      url: '/dentistry',
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
    {
      id: 'engineering',
      title: 'Engineering',
      type: 'item',
      url: '/engineering',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'generalmain',
      title: 'General Main',
      type: 'item',
      url: '/generalmain',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'govtpolicies',
      title: 'Govt. Policies',
      type: 'item',
      url: '/govtpolicies',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'health',
      title: 'Health',
      type: 'item',
      url: '/health',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'house',
      title: 'House',
      type: 'item',
      url: '/house',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'law',
      title: 'Law',
      type: 'item',
      url: '/law',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'lifesciences',
      title: 'Life Sciences',
      type: 'item',
      url: '/lifesciences',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'logistics',
      title: 'Logistics',
      type: 'item',
      url: '/logistics',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'medical',
      title: 'Medical',
      type: 'item',
      url: '/medical',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'misc',
      title: 'Misc',
      type: 'item',
      url: '/misc',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'nature',
      title: 'Nature',
      type: 'item',
      url: '/nature',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'reference',
      title: 'Reference',
      type: 'item',
      url: '/reference',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'science',
      title: 'Science',
      type: 'item',
      url: '/science',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'socialscience',
      title: 'Social Science',
      type: 'item',
      url: '/socialscience',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'technology',
      title: 'Technology',
      type: 'item',
      url: '/technology',
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
