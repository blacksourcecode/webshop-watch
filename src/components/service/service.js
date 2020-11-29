import React from 'react';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import { useServiceStyles } from './serviceStyles';
import { serviceData } from '../../data/service';

const Service = () => {
	const classes = useServiceStyles();
	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				<div className={classes.contentDiv}>
					<section id='service'>
						<Box display='flex' justifyContent='center'>
							<Typography className={classes.titleHading} variant='h2'>
								{serviceData.heading.title}
							</Typography>
						</Box>
						<Box display='flex' justifyContent='center'>
							<Typography className={classes.subtitleHeading}>
								{serviceData.heading.subtitle}
							</Typography>
						</Box>
						<Grid container spacing={3} className={classes.serviceContainer}>
							{serviceData.serviceList.map((review, index) => {
								return (
									<Grid key={index} item lg={4} md={4} sm={4} xs={12}>
										<Paper className={classes.paper}>
											<Typography variant='h6' className={classes.serviceTitle}>
												{review.title}
											</Typography>
											<Typography
												variant='body1'
												gutterBottom
												className={classes.serviceTxt}
											>
												{review.txt}
											</Typography>
										</Paper>
									</Grid>
								);
							})}
						</Grid>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Service;
