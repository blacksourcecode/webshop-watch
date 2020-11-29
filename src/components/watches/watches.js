import React from 'react';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import {
	Grid,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	IconButton,
	Snackbar,
	Box,
	Typography,
} from '@material-ui/core';

// Import WatchImages
import U1 from '../../images/u1.jpg';
import U2 from '../../images/u2.jpg';
import U3 from '../../images/u3.jpg';
import U4 from '../../images/u4.jpg';
import { useWatchesStyles } from './watchesStyles';
import { watchData } from '../../data/watch';

const watchImages = [U1, U2, U3, U4];

const Watches = () => {
	const classes = useWatchesStyles();
	const [open, setOpen] = React.useState(false);

	const buyWatch = () => {
		setOpen(true);
		setTimeout(() => {
			setOpen(false);
		}, 6000);
	};

	const showProductAlert = (
		<Snackbar
			open={open}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			autoHideDuration={6000}
		>
			<Alert
				action={
					<IconButton
						aria-label='close'
						color='inherit'
						size='small'
						onClick={() => {
							setOpen(false);
						}}
					>
						<CloseIcon fontSize='inherit' />
					</IconButton>
				}
			>
				Watch added to cart
			</Alert>
		</Snackbar>
	);

	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				<div className={classes.contentDiv}>
					<section id='watches'>
						{open === true ? showProductAlert : ''}
						<Box display='flex' justifyContent='center'>
							<Typography className={classes.titleHading} variant='h2'>
								{watchData.heading.title}
							</Typography>
						</Box>
						<Box display='flex' justifyContent='center'>
							<Typography className={classes.subtitleHeading}>
								{watchData.heading.subtitle}
							</Typography>
						</Box>
						<Grid container spacing={3} className={classes.reviewContainer}>
							{watchData.watchList.map((watch, index) => {
								return (
									<Grid key={index} item lg={3} md={3} sm={6} xs={12}>
										<Card>
											<CardActionArea>
												<CardMedia
													component='img'
													className={classes.media}
													image={watchImages[index]}
													title={watch.title}
												/>
												<CardContent className={classes.cardContentWrapper}>
													<Box display='flex' justifyContent='center'>
														<Typography gutterBottom variant='h5'>
															{watch.title}
														</Typography>
													</Box>
													<Box display='flex' justifyContent='center'>
														<Typography gutterBottom variant='body1'>
															${watch.price}
														</Typography>
													</Box>
													<Box display='flex' justifyContent='center'>
														<div
															className={classes.buyBtn}
															color='primary'
															onClick={() => {
																buyWatch();
															}}
														>
															Buy
														</div>
													</Box>
												</CardContent>
											</CardActionArea>
										</Card>
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

export default Watches;
