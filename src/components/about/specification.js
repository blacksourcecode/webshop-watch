import React from 'react';
import WhiteWatch from '../../images/white-watch.png';
import { Box, Typography, CardMedia, Grid, Paper } from '@material-ui/core';
import { useSpecificationStyles } from './styles/specificationStyles';
import { aboutData } from '../../data/about';

const Specification = () => {
	const classes = useSpecificationStyles();
	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				<div className={classes.contentDiv}>
					<Box display='flex' justifyContent='center'>
						<Typography className={classes.titleHading} variant='h2'>
							{aboutData.specification.heading.title}
						</Typography>
					</Box>
					<Box display='flex' justifyContent='center'>
						<Typography className={classes.subtitleHeading}>
							{aboutData.specification.heading.subTitle}
						</Typography>
					</Box>
					<Grid container spacing={4} className={classes.reviewContainer}>
						<Grid item lg={4} md={4} sm={4} xs={12}>
							<Box mt={2} mb={2}>
								{aboutData.specification.leftDataList.map((leftData, index) => {
									return (
										<Grid key={index} item lg={12} md={12} sm={12} xs={12}>
											<Paper className={classes.paper}>
												<Typography
													className={classes.specificationTitle}
													variant='h3'
												>
													{leftData.title}
												</Typography>
												<Typography
													className={classes.specificationTxt}
													variant='body1'
												>
													{leftData.txt}
												</Typography>
											</Paper>
										</Grid>
									);
								})}
							</Box>
						</Grid>
						<Grid item lg={4} md={4} sm={4} xs={12}>
							<CardMedia
								component='img'
								className={classes.media}
								image={WhiteWatch}
								title='White watch'
							/>
						</Grid>
						<Grid item lg={4} md={4} sm={4} xs={12}>
							<Box mt={2} mb={2}>
								{aboutData.specification.rightDataList.map(
									(rightData, index) => {
										return (
											<Grid key={index} item lg={12} md={12} sm={12} xs={12}>
												<Paper className={classes.paper}>
													<Typography
														className={classes.specificationTitle}
														variant='h3'
													>
														{rightData.title}
													</Typography>
													<Typography
														className={classes.specificationTxt}
														variant='body1'
													>
														{rightData.txt}
													</Typography>
												</Paper>
											</Grid>
										);
									}
								)}
							</Box>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default Specification;
