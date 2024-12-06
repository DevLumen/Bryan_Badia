import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'whitesmoke' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'black',
  color: 'whitesmoke',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FaqAccordian() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="accordian">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Why not just use a page builder or wordpress site?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We hand write all the code that will go into your website.  This allows for custom designs, 
          zero bloat or wasted code, instant load times and is more secure.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="accordian">
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What kind of websites can you make?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We can accommodate almost any website request. Features like storefronts, and secure log-in will take more time since
            we need additional testing to make sure your clients information is secure. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="accordian">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is the pay structure for a website?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We start with a 6 month contract at $150 a month which includes unlimited edits, 24/7 support, lifetime updates,
            and hosting.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="accordian">
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>What happens after 6 months?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            After 6 months you can sign up for another 6 month contract and keep that $150 a month offer or switch to month
            to month pricing for $175. If you decide to cancel during the 6 month contract period then payment will be need to made in full.
            If you also decide to leave after 6 months you can buy the codebase for a lump sum or it stays with us.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="accordian">
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>What if I want to add a new page to my site?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Edits to already built pages come free of charge. New pages are a one time $125 fee per page. Pricing based on your
            subscription will not change.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="accordian">
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>How long does a website take?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We hate to say it but it all depends on what needs to be done. Generally, for static portfolio sites 
            or simple business sites we can have them built in 2-3 weeks.  
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="accordian">
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>How do I request edits?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can reach the team at our company email fake@fake.com.  We will let you know when we've received it, and 
            when it has been completed. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}