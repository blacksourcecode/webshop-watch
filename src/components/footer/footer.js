import React, { useState } from 'react';
import DoneIcon from '@material-ui/icons/Done';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import {
	Box,
	Button,
	Typography,
	Grid,
	Paper,
	Snackbar,
	IconButton,
} from '@material-ui/core';
import { footerData } from '../../data/footer';
import { useFooterStyles } from './footerStyles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const Footer = () => {
	const classes = useFooterStyles();

	const [social, setSocial] = useState('');
	const [socialBoolean, setSocialBoolean] = useState(false);

	const socialInputChange = (event) => {
		setSocial(event.target.value);
	};

	const sendSocial = (event) => {
		setSocialBoolean(true);
		setSocial('');
		setTimeout(() => {
			setSocialBoolean(false);
		}, 6000);

		event.preventDefault();
	};

	const showSocialAlert = (
		<Snackbar
			open={socialBoolean}
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
							setSocialBoolean(false);
						}}
					>
						<CloseIcon fontSize='inherit' />
					</IconButton>
				}
			>
				Thank You For Your Interest
			</Alert>
		</Snackbar>
	);

	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				<div className={classes.contentDiv}>
					{socialBoolean === true ? showSocialAlert : ''}
					<Grid container spacing={1}>
						<Grid item lg={4} md={4} sm={6} xs={12}>
							<Paper className={classes.paper}>
								<Typography variant='h2' className={classes.title}>
									{footerData.about.title}
								</Typography>
								<Typography variant='body1' className={classes.txt}>
									{footerData.about.txt}
								</Typography>
							</Paper>
						</Grid>
						<Grid item lg={4} md={4} sm={6} xs={12}>
							<Paper className={classes.paper}>
								<Typography variant='h2' className={classes.title}>
									{footerData.newsletter.title}
								</Typography>

								<Typography variant='subtitle1' className={classes.txt}>
									{footerData.newsletter.subtitle}
								</Typography>
								<ValidatorForm
									className={classes.inlineComponents}
									noValidate
									onSubmit={sendSocial}
									autoComplete='off'
									useref='form'
									onError={(errors) => console.log(errors)}
								>
									<TextValidator
										label='E-mail'
										variant='outlined'
										className={classes.inputFooterStyles}
										onChange={socialInputChange}
										value={social}
										validators={['required', 'isEmail']}
										errorMessages={[
											'this field is required',
											'email is not valid',
										]}
									/>
									<Button
										className={classes.submitBtn}
										variant='contained'
										color='primary'
										type='submit'
									>
										<DoneIcon />
									</Button>
								</ValidatorForm>
							</Paper>
						</Grid>
						<Grid item lg={4} md={4} sm={12} xs={12}>
							<Paper className={classes.paper}>
								<Typography variant='h2' className={classes.title}>
									{footerData.social.title}
								</Typography>
								<Typography variant='subtitle2' className={classes.txt}>
									{footerData.social.subtitle}
								</Typography>
								<div className={classes.socialLinkWrapper}>
									{footerData.social.socials.map((social) => {
										return (
											<div key={social.id}>
												<Button
													style={{ backgroundColor: social.color }}
													className={classes.socialLink}
													onClick={sendSocial}
												>
													{social.icon}
												</Button>
											</div>
										);
									})}
								</div>
							</Paper>
						</Grid>
					</Grid>
				</div>
				<Box className={classes.copy} display='flex' justifyContent='center'>
					{footerData.copy.txt}
				</Box>
			</div>
		</div>
	);
};

export default Footer;
