import { makeStyles } from '@material-ui/core/styles';

export const useVideoStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		height: 'auto',
		padding: '15px',
	},
	wrapper: {
		padding: '40px 0px 80px 0px',
		maxWidth: '1125px',
		margin: '0 auto',
	},

	paperDetails: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(4, 8, 6),
	},

	modalTilte: {
		fontSize: '20px',
		fontWeight: '500',
		marginBottom: '15px',
		[theme.breakpoints.down('lg')]: {
			fontSize: '25px',
		},
	},

	firstTitle: {
		fontSize: '12px',
		fontWeight: '300',
		lineHeight: '14px',
		color: '#235ee7',
	},

	title: {
		marginTop: '15px',
		fontSize: '28px',
		fontWeight: '600',
		lineHeight: '42px',
		color: '#222',

		[theme.breakpoints.down('xs')]: {
			fontSize: '19px',
		},
	},

	subTitle: {
		margin: '10px 0px 10px 0px',
		fontSize: '14px',
		fontWeight: '500',
		lineHeight: '23px',
		color: '#777',
	},

	txt: {
		fontSize: '14px',
		fontWeight: '300',
		lineHeight: '23px',
		color: '#777',
	},

	btnWrapper: {
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
		},
	},

	btn: {
		marginTop: '20px',
		padding: '7px 40px',
		borderRadius: '50px',

		[theme.breakpoints.down('sm')]: {
			marginBottom: '40px',
		},
	},

	contentDiv: {
		width: '100%',
		borderRightColor: 'yellow',
	},

	youtubeWrapper: {
		position: 'relative',
		paddingTop: '56.25%', // Player ratio: 100 / (1280 / 720)
	},

	youtubePlayer: {
		position: 'absolute',
		top: 0,
		left: 0,
	},
}));
