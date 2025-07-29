import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { SxProps, Theme } from '@mui/material';

interface NavAccordianProps {
    actionSummary: React.ReactNode;
    accordionDetails: React.ReactNode;
    sx?: SxProps<Theme>;
    icon?: React.ReactNode;
}

const NAVAccordion: React.FC<NavAccordianProps> = ({ actionSummary, accordionDetails, sx = {}, icon = <ArrowDownwardIcon /> }) => {
    return (
        <Accordion
            sx={sx}
        >
            <AccordionSummary
                expandIcon={icon}
                aria-controls="panel1-content"
            >
                {actionSummary}
            </AccordionSummary>
            <AccordionDetails sx={{ py: 0 }}>
                {accordionDetails}
            </AccordionDetails>
        </Accordion>
    );
}

export default NAVAccordion