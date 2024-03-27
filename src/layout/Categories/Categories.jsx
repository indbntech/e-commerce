import React, { useState } from 'react';
import { Box, Card, CardContent, List, ListItem, ListItemText, Divider, Button } from '@mui/material';

const categories = [
  {
    id: 1,
    name: 'Art',
    subcategories: ['Acting & Auditioning', 'Ancient Civilization', 'Biographical', 'Business', 'Cartooning', 'Collections, Catalogs, Exhibitions', 'Conducting','Discography & Buyer Guides', 'Electricity & Electronics', 'Film', 'Glass & Glassware', 'Individual Artist', 'Jewelery', 'Lightening','Lawyer','Kitchenware', 'Knitting', 'Mass Media'],
  },
  {
    id: 2,
    name: 'Business Economics',
    subcategories: ['Accounting', 'Banks & Banking', 'Business Etiquette', 'Commerce', 'Corporate & Business History', 'Diet & Nutrition', 'Economic History','Finance', 'Free Enterprise', 'Governmental', 'Infrastructure', 'Knowledge Capital', 'Mail Order', 'Media & Comm. Industries','Money & Monetary Policy', 'Nonprofit Org & Charities'],
  },
  {
    id: 3,
    name: 'Computer',
    subcategories: ['Ada', 'Broadband', 'Client, Server Computing', 'Computer Animation', 'Computer Literacy', 'Cybernetics', 'Database Management','E-Commerce', 'Expert Systems', 'HTML', 'Internet', 'Linux', 'Mainframes & Minicomputers', 'Natural Language Processing','Optical Data Processing', 'Programming'],
  },
  {
    id: 4,
    name: 'Dentistry',
  subcategories: ['All Dentistry', 'Biotribiology', 'Dental Assisting', 'Dental Hygiene', 'Dental Informatics', 'Dental Microbiology', 'Dental Pathology','Endodontics', 'Oral History', 'Oral Medicine', 'Oral Radiology', 'Oral Surgery','Orthodontics', 'Periodontics'],
  },
  {
    id: 5,
    name: 'Education',
    subcategories: ['Administration', 'Aims & Objectives', 'Arts & Humanities', 'Bilingual Education', 'Children & Youth', 'College Entrance', 'College Guides','Comparative', 'Cryptography', 'Curricula', 'Educational Psychology', 'Educational Reforms', 'Cultural History', 'Economic History','Financial Aid', ],
  },
  {
    id: 6,
    name: 'Engineering',
    subcategories: ['Aerodynamics', 'Automotive', 'Chemical Dictionary', 'Computational Intelligence', 'Decoration & Ornaments', 'Eletrical', 'Estimating','Historic Preservation', 'Industrial Design', 'Landscape', 'MicroElectronics', 'Piloting & Flight Instruction', 'Aviation', 'Chemical Engineering','Construction'],
  },
  {
    id: 7,
    name: 'House & Home',
    subcategories: ['Baking', 'Grilling', 'Vegetarian', 'Vegan', 'Paleo', 'Asian Cuisine', 'Italian Cuisine','Baking', 'Grilling', 'Vegetarian', 'Vegan', 'Paleo', 'Asian Cuisine', 'Italian Cuisine','Baking', 'Grilling', 'Vegetarian', 'Vegan', 'Paleo', 'Asian Cuisine', 'Italian Cuisine'],
  },
  {
    id: 8,
    name: 'Law',
    subcategories: ['Baking', 'Grilling', 'Vegetarian', 'Vegan', 'Paleo', 'Asian Cuisine', 'Italian Cuisine','Baking', 'Grilling', 'Vegetarian', 'Vegan', 'Paleo', 'Asian Cuisine', 'Italian Cuisine','Baking', 'Grilling', 'Vegetarian', 'Vegan', 'Paleo', 'Asian Cuisine', 'Italian Cuisine'],
  },
  {
    id: 9,
    name: 'Life Sciences',
    subcategories: ['Baking', 'Grilling', 'Vegetarian', 'Vegan', 'Paleo', 'Asian Cuisine', 'Italian Cuisine','Baking', 'Grilling', 'Vegetarian', 'Vegan', 'Paleo', 'Asian Cuisine', 'Italian Cuisine','Baking', 'Grilling', 'Vegetarian', 'Vegan', 'Paleo', 'Asian Cuisine', 'Italian Cuisine'],
  },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

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
        width="80vw" // Set width to 80% of viewport width
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
                            <td key={i} style={{ padding: '8px', fontSize:'14px' }}>
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
