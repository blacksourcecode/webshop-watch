import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import { useReviewStyles } from './reviewStyles';
import { reviewData } from '../../data/review';

const Rating = (props) => {
	const { rating, color, noColor } = props;
	let ratingNoColor = [];
	let ratingColor = [];
	for (var i = 0; i < rating; i++) {
		ratingColor.push(<StarIcon key={`loop1${i}`} className={color} />);
	}
	for (var k = 0; k < 5 - rating; k++) {
		ratingNoColor.push(<StarIcon key={`loop2${k}`} className={noColor} />);
	}
	return (
		<>
			{ratingColor}
			{ratingNoColor}
		</>
	);
};

const Reviews = () => {
	const classes = useReviewStyles();
	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				<div className={classes.contentDiv}>
					<section id='review'>
						<Box display='flex' justifyContent='center'>
							<Typography className={classes.titleHading} variant='h2'>
								{reviewData.heading.title}
							</Typography>
						</Box>
						<Box display='flex' justifyContent='center'>
							<Typography className={classes.subtitleHeading}>
								{reviewData.heading.subtitle}
							</Typography>
						</Box>
						<Grid container spacing={3} className={classes.reviewContainer}>
							{reviewData.reviewList.map((review) => {
								return (
									<Grid key={review.title} item lg={4} md={4} sm={6} xs={12}>
										<Paper className={classes.paper}>
											<Typography variant='h6' className={classes.reviewTitle}>
												{review.title}
											</Typography>
											<Typography
												variant={`body1`}
												className={classes.reviewTxt}
											>
												{review.txt}
											</Typography>
											<Box className={classes.starBox}>
												<Rating
													rating={review.rating}
													color={classes.starIconColor}
													noColor={classes.starIconNoColor}
												/>
											</Box>
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

export default Reviews;
