import * as React from 'react';
import { Box, Card, CardContent, List, ListItem, ListItemText, Divider, Button } from '@mui/material';

const categories = [
  {
    id: 1,
    name: 'Fiction',
    subcategories: ['Mystery', 'Thriller', 'Romance', 'Science Fiction', 'Fantasy', 'Horror', 'Adventure','Mystery', 'Thriller', 'Romance', 'Science Fiction', 'Fantasy', 'Horror', 'Adventure','Mystery', 'Thriller', 'Romance', 'Science Fiction', 'Fantasy', 'Horror', 'Adventure'],
  },
  {
    id: 2,
    name: 'Non-Fiction',
    subcategories: ['Biography', 'History', 'Self-Help', 'Cooking', 'Travel', 'Science', 'Technology','Biography', 'History', 'Self-Help', 'Cooking', 'Travel', 'Science', 'Technology','Biography', 'History', 'Self-Help', 'Cooking', 'Travel', 'Science', 'Technology'],
  },
  {
    id: 3,
    name: 'Children',
    subcategories: ['Picture Books', 'Middle Grade', 'Young Adult', 'Graphic Novels', 'Educational', 'Activity Books','Picture Books', 'Middle Grade', 'Young Adult', 'Graphic Novels', 'Educational', 'Activity Books','Picture Books', 'Middle Grade', 'Young Adult', 'Graphic Novels', 'Educational', 'Activity Books'],
  },
  {
    id: 4,
    name: 'Science Fiction',
    subcategories: ['Aliens', 'Space Opera', 'Cyberpunk', 'Dystopia', 'Time Travel', 'Hard Science Fiction', 'Soft Science Fiction','Aliens', 'Space Opera', 'Cyberpunk', 'Dystopia', 'Time Travel', 'Hard Science Fiction', 'Soft Science Fiction','Aliens', 'Space Opera', 'Cyberpunk', 'Dystopia', 'Time Travel', 'Hard Science Fiction', 'Soft Science Fiction'],
  },
  {
    id: 5,
    name: 'Fantasy',
    subcategories: ['High Fantasy', 'Urban Fantasy', 'Epic Fantasy', 'Dark Fantasy', 'Sword and Sorcery', 'Magical Realism', 'Historical Fantasy','High Fantasy', 'Urban Fantasy', 'Epic Fantasy', 'Dark Fantasy', 'Sword and Sorcery', 'Magical Realism', 'Historical Fantasy','High Fantasy', 'Urban Fantasy', 'Epic Fantasy', 'Dark Fantasy', 'Sword and Sorcery', 'Magical Realism', 'Historical Fantasy'],
  },
  {
    id: 6,
    name: 'History',
    subcategories: ['Ancient History', 'Medieval History', 'Modern History', 'Military History', 'Social History', 'Cultural History', 'Economic History','Ancient History', 'Medieval History', 'Modern History', 'Military History', 'Social History', 'Cultural History', 'Economic History','Ancient History', 'Medieval History', 'Modern History', 'Military History', 'Social History', 'Cultural History', 'Economic History'],
  },
  {
    id: 7,
    name: 'Technology',
    subcategories: ['Programming', 'Web Development', 'Data Science', 'Machine Learning', 'Artificial Intelligence', 'Cybersecurity', 'Blockchain','Programming', 'Web Development', 'Data Science', 'Machine Learning', 'Artificial Intelligence', 'Cybersecurity', 'Blockchain','Programming', 'Web Development', 'Data Science', 'Machine Learning', 'Artificial Intelligence', 'Cybersecurity', 'Blockchain'],
  },
  {
    id: 8,
    name: 'Cooking',
    subcategories: ['Baking', 'Grilling', 'Vegetarian', 'Vegan', 'Paleo', 'Asian Cuisine', 'Italian Cuisine','Baking', 'Grilling', 'Vegetarian', 'Vegan', 'Paleo', 'Asian Cuisine', 'Italian Cuisine','Baking', 'Grilling', 'Vegetarian', 'Vegan', 'Paleo', 'Asian Cuisine', 'Italian Cuisine'],
  },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleCategoryHover = (category) => {
    setSelectedCategory(category);
  };

  const handleButtonHover = () => {
    setSelectedCategory(categories[0]); // Open the first category by default when hovering on the button
  };

  return (
    <Box position="relative">
      <Button onMouseEnter={handleButtonHover}>
        Categories
      </Button>
      <Box
        position="absolute"
        top={40}
        left={0}
        zIndex={1000}
        width={800}
        onMouseLeave={() => setSelectedCategory(null)}
      >
        <Card variant="outlined" sx={{ display: selectedCategory ? 'block' : 'none' }}>
          <CardContent sx={{ display: 'flex' }}>
            <Box sx={{ flex: 1, backgroundColor: '#f0f0f0' }}>
              <List>
                {categories.map(category => (
                  <ListItem
                    key={category.id}
                    onMouseEnter={() => handleCategoryHover(category)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <ListItemText primary={category.name} />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={{ flex: 2, backgroundColor: '#e0e0e0', padding: '16px' }}>
              {selectedCategory && (
                <table style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    {selectedCategory.subcategories.map((subcategory, index) => (
                      index % 5 === 0 && (
                        <tr key={index}>
                          {[...Array(5)].map((_, i) => (
                            <td key={i} style={{ padding: '8px' }}>
                              {selectedCategory.subcategories[index + i]}
                            </td>
                          ))}
                        </tr>
                      )
                    ))}
                  </tbody>
                </table>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Categories;
