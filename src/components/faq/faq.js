import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { faqData } from '../../data/faq';
import { useFaqStyles } from './faqStyles';

const Faq = () => {
	const classes = useFaqStyles();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				<div className={classes.contentDiv}>
					<section id='faq'>
						<Box display='flex' justifyContent='center'>
							<Typography className={classes.titleHading} variant='h2'>
								{faqData.heading.title}
							</Typography>
						</Box>
						<Box display='flex' justifyContent='center'>
							<Typography className={classes.subtitleHeading}>
								{faqData.heading.subtitle}
							</Typography>
						</Box>
						<div className={classes.toggleWrapper}>
							{faqData.btnList.map((btn, index) => {
								const panel = `panel${index}`;
								return (
									<Accordion
										key={index}
										expanded={expanded === panel}
										onChange={handleChange(panel)}
										className={classes.toggleDiv}
									>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls={`${panel}bh-content`}
											id={`${panel}bh-header`}
										>
											<Typography className={classes.heading}>
												{btn.title}
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography>{btn.txt}</Typography>
										</AccordionDetails>
									</Accordion>
								);
							})}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Faq;
