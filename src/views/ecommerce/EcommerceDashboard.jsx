// material-ui
// project imports
import MainCard from 'ui-component/cards/MainCard';
//import ProductPage from './product';
// import ImageCarousel from './imageSlider';
import FadeSlickSlider from './SlickImageSlider';
import ItemMultipleSider from './itemSlider';
// import ComplexGrid from 'views/sample-page/ComplexGrid';
import PorductCategory from './ProductCategory';
import Banner21 from './image/banner21.png'
import { Typography } from '@mui/material';
import Delivery from './delivery';
import Footer from 'views/footer/footer';

const EcommerceDashboard = () => (
  <MainCard title="Ecommerce dashboard">
    {/* <ProductPage /> */}
    {/* <ImageCarousel />
    <br/> */}
    <FadeSlickSlider />
    <br />
    <br />
    <br />
    <Delivery />
    <br />
    <br />
    <Typography className='itemTitle' variant='h4'>Popular Categories in Books</Typography>
    <PorductCategory />
    <Typography className='itemTitle' variant='h4'>Featured Items</Typography>
    <ItemMultipleSider />
    <img className="ImageDesing" src={Banner21} alt='../'/>
    <Typography className='itemTitle' variant='h4'>Best Selling Books</Typography>
    <ItemMultipleSider />
    <Typography className='itemTitle' variant='h4'>Popular Books</Typography>
    <ItemMultipleSider />
    <Typography className='itemTitle' variant='h4'>Special Offers</Typography>
    <ItemMultipleSider />
    <br />
    <br />
    <Footer/>
  </MainCard>
);

export default EcommerceDashboard;
