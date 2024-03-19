// material-ui
// project imports
import MainCard from 'ui-component/cards/MainCard';
//import ProductPage from './product';
// import ImageCarousel from './imageSlider';
import FadeSlickSlider from './SlickImageSlider';
import ItemMultipleSider from './ItemSlider';
// import ComplexGrid from 'views/sample-page/ComplexGrid';
import PorductCategory from './ProductCategory';

const EcommerceDashboard = () => (
  <MainCard title="Ecommerce dashboard">
    {/* <ProductPage /> */}
    {/* <ImageCarousel />
    <br/> */}
    <FadeSlickSlider/>
    <br/>
    <br/>
    <br/>
    <br/>
    <PorductCategory/>
    <ItemMultipleSider/>
    
  </MainCard>
);

export default EcommerceDashboard;
