import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Button, Typography, Grid, Modal } from '@material-ui/core';
import { useVideoStyles } from './styles/videoStyles';
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

const Video = () => {
	const classes = useVideoStyles();

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
				{aboutData.video.modal.title}
			</Typography>
			<Typography variant='body2'>{aboutData.video.modal.txt}</Typography>
		</div>
	);

	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				<div className={classes.contentDiv}>
					<Grid container>
						<Grid item lg={6} md={6} sm={12} xs={12}>
							<Typography className={classes.firstTitle} variant='h6'>
								{aboutData.video.firstTitle}
							</Typography>
							<Typography className={classes.title} variant='h5'>
								{aboutData.video.title}
							</Typography>
							<Typography className={classes.subTitle} variant='h6'>
								{aboutData.video.subTitle}
							</Typography>
							<Typography className={classes.txt} variant='body1' gutterBottom>
								{aboutData.video.txt}
							</Typography>
							<Box className={classes.btnWrapper}>
								<Button
									className={classes.btn}
									variant='contained'
									color='primary'
									onClick={handleOpen}
								>
									Get Started now
								</Button>
							</Box>
						</Grid>
						<Grid item lg={6} md={6} sm={12} xs={12}>
							<div className={classes.youtubeWrapper}>
								<ReactPlayer
									className={classes.youtubePlayer}
									width='100%'
									height='100%'
									url={aboutData.video.video}
									playing
								/>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
			<Modal open={open} onClose={handleClose}>
				{body}
			</Modal>
		</div>
	);
};

export default Video;
