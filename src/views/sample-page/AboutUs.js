import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import Table from './Table'
import TableAdd from './TableAdd'

const AboutUs = () => {
  return (
    <Container fluid className="mt-2">
      <Box sx={{display:'flex'}}>
      <Typography variant="h5">
        Description
      </Typography>
      <Typography variant="h5" sx={{ml:3}}>
        Reviews
      </Typography>
      </Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="headingOne">
          <Typography variant="h6">Specification</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{display:'flex'}}>
            <Box sx={{ marginRight: 15 }}><Table/></Box>
            <Box><TableAdd/></Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="headingTwo">
          <Typography variant="h6">Material and Wash instruction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="headingThree">
          <Typography variant="h6">Add on data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default AboutUs;
