// Category.js
import React from 'react';
import Grid from '@mui/material/Grid';
import SubCategory from '../SubCategory';

const bookData = [
  // Example book data (replace with actual data)
  {
    coverImage: 'https://delhibookstore.com/wp-content/uploads/2023/07/9780004129679-200x230.jpg',
    title: 'ART,NEEDLEWORK',
    author: 'Baskets',
    originalPrice: '₹4,793.92',
    discountedPrice: '₹2,897.94',
    websiteUrl: 'https://delhibookstore.com/shop/baskets/'
  },
  {
    coverImage: 'https://delhibookstore.com/wp-content/uploads/2023/07/logo.jpg',
    title: 'ART,CHRISTIANITY',
    author: 'Writing Through',
    originalPrice: '₹4,793.92',
    discountedPrice: '₹2,897.94',
    websiteUrl: 'https://delhibookstore.com/shop/writing-through-literature/'
  },
  {
    coverImage: 'https://delhibookstore.com/wp-content/uploads/2023/07/9780023039416-200x303.jpg',
    title: 'Art History',
    author: 'U.S.Foreign',
    originalPrice: '₹4,793.92',
    discountedPrice: '₹2,897.94',
    websiteUrl: 'https://delhibookstore.com/shop/u-s-foreign-policy-the-search-for-a-new-role/'
  },
  {
    coverImage: 'https://delhibookstore.com/wp-content/uploads/2023/07/9780023184307-200x267.jpg',
    title: 'Art History',
    author: 'The Enjoyment',
    originalPrice: '₹4,793.92',
    discountedPrice: '₹2,897.94',
    websiteUrl: 'https://delhibookstore.com/shop/the-enjoyment-of-theatre/'
  },
  {
    coverImage: 'https://delhibookstore.com/wp-content/uploads/2023/07/9780023305528-200x300.jpg',
    title: 'Art History',
    author: 'Politics and Policy',
    originalPrice: '₹4,793.92',
    discountedPrice: '₹2,897.94',
    websiteUrl: 'https://delhibookstore.com/shop/politics-and-policy-in-american-states-and-communities/'
  },
  {
    coverImage: 'https://delhibookstore.com/wp-content/uploads/2023/07/9780023372858-200x300.jpg',
    title: 'Art History',
    author: 'Constructive Guidance',
    originalPrice: '₹4,793.92',
    discountedPrice: '₹2,897.94',
    websiteUrl: 'https://delhibookstore.com/shop/constructive-guidance-and-discipline-preschool-and-primary-education/'
  },
  {
    coverImage: 'https://delhibookstore.com/wp-content/uploads/2023/07/9780023386510-200x300.jpg',
    title: 'Art History',
    author: 'Voices Of A Nation',
    originalPrice: '₹4,793.92',
    discountedPrice: '₹2,897.94',
    websiteUrl: 'https://delhibookstore.com/shop/voices-of-a-nation-a-history-of-mass-media-in-the-united-states/'
  },
  {
    coverImage: 'https://delhibookstore.com/wp-content/uploads/2023/07/9780023398339-200x243.jpg',
    title: 'Art History',
    author: 'Affirming Diversity',
    originalPrice: '₹4,793.92',
    discountedPrice: '₹2,897.94',
    websiteUrl: 'https://delhibookstore.com/shop/affirming-diversity-through-democratic-conversations-improving-dialogue-with-communities/'
  },
  {
    coverImage: 'https://delhibookstore.com/wp-content/uploads/2023/07/9780023428500-200x317.jpg',
    title: 'Art History',
    author: 'Engineering Graphics',
    originalPrice: '₹4,793.92',
    discountedPrice: '₹2,897.94',
    websiteUrl: 'https://delhibookstore.com/shop/engineering-graphics-2/'
  },
  {
    coverImage: 'https://delhibookstore.com/wp-content/uploads/2023/07/9780023437519-200x254.jpg',
    title: 'Art History',
    author: 'College Algebra',
    originalPrice: '₹4,793.92',
    discountedPrice: '₹2,897.94',
    websiteUrl: 'https://delhibookstore.com/shop/college-algebra-enhanced-with-graphing-utilities/'
  },
  {
    coverImage: 'https://delhibookstore.com/wp-content/uploads/2023/07/9780023505812-200x256.jpg',
    title: 'Art History',
    author: 'Dance A While',
    originalPrice: '₹4,793.92',
    discountedPrice: '₹2,897.94',
    websiteUrl: 'https://delhibookstore.com/shop/dance-a-while-handbook-for-folk-square-contra-and-social-dance/'
  },
  {
    coverImage: 'https://delhibookstore.com/wp-content/uploads/2023/07/9780023548215-200x283.jpg',
    title: 'Art History',
    author: 'Short-Term Financial',
    originalPrice: '₹4,793.92',
    discountedPrice: '₹2,897.94',
    websiteUrl: 'https://delhibookstore.com/shop/short-term-financial-management-text-and-cases/'
  },
  // Add more book items
];

const Category = () => {
  return (
    <Grid container spacing={2}>
      {bookData.map((book, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
          <SubCategory {...book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Category;
