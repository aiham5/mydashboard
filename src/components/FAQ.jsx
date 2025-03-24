import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How is revenue calculated?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Revenue is calculated by multiplying the number of sales by the
            price of each item.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is traffic?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Traffic refers to the number of customers visiting the restaurant.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQ;
