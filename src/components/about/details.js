import React from 'react';
import Watch from '../../images/about-watch.jpg';
import {
	Modal,
	Grid,
	Box,
	Button,
	Paper,
	Typography,
	CardMedia,
} from '@material-ui/core';
import { useDetailsStyles } from './styles/detailsStyles';
import { aboutData } from '../../data/about';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const Details = () => {
	const classes = useDetailsStyles();

	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div style={modalStyle} className={classes.paperDetails}>
			<Typography variant='h3' className={classes.modalTilte}>
				{aboutData.details.modal.title}
			</Typography>
			<Typography variant='body1' gutterBottom>
				{aboutData.details.modal.txt}
			</Typography>
		</div>
	);

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<CardMedia
						component='img'
						className={classes.media}
						image={Watch}
						title='Watch on arm'
					/>
				</Grid>
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<Paper className={classes.paper}>
						<Typography variant='h5' className={classes.title}>
							{aboutData.details.title}
						</Typography>
						<Typography variant='h6' className={classes.subTitle}>
							{aboutData.details.subTitle}
						</Typography>
						<Typography variant='body1' className={classes.txt}>
							{aboutData.details.txt}
						</Typography>
						<Box>
							<Button
								className={classes.btn}
								variant='contained'
								color='primary'
								onClick={handleOpen}
							>
								Get Details
							</Button>
						</Box>
					</Paper>
				</Grid>
			</Grid>
			<Modal open={open} onClose={handleClose}>
				{body}
			</Modal>
		</div>
	);
};

export default Details;
