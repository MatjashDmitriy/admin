import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m='20px'>
        <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An inportant question 1
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit integer sed efficitur felis, volutpat tristique diam 
                dolor quam, viverra non vehicula et, auctor a nunc? 
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An inportant question 2
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit integer sed efficitur felis, volutpat tristique diam 
                dolor quam, viverra non vehicula et, auctor a nunc? 
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An inportant question 3
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit integer sed efficitur felis, volutpat tristique diam 
                dolor quam, viverra non vehicula et, auctor a nunc? 
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An inportant question 4
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit integer sed efficitur felis, volutpat tristique diam 
                dolor quam, viverra non vehicula et, auctor a nunc? 
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An inportant question 5
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit integer sed efficitur felis, volutpat tristique diam 
                dolor quam, viverra non vehicula et, auctor a nunc? 
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An inportant question 6
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit integer sed efficitur felis, volutpat tristique diam 
                dolor quam, viverra non vehicula et, auctor a nunc? 
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
}

export default FAQ