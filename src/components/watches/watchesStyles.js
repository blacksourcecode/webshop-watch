import { makeStyles } from '@material-ui/core/styles';

export const useWatchesStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: '15px',
		backgroundColor: '#434546',
	},

	wrapper: {
		padding: '40px 0px 40px 0px',
		maxWidth: '1125px',
		margin: '0 auto',
	},

	titleHading: {
		fontSize: '36px',
		lineHeight: '45px',
		fontWeight: '600',
		color: '#ccc',

		[theme.breakpoints.down('xs')]: {
			fontSize: '25px',
		},
	},

	subtitleHeading: {
		fontSize: '14px',
		lineHeight: '23px',
		fontWeight: '300',
		color: '#ccc',
		[theme.breakpoints.down('xs')]: {
			fontSize: '13px',
		},
	},

	contentDiv: {
		width: '100%',
	},

	paper: {
		textAlign: 'center',
		padding: '20px',
	},

	cardContentWrapper: {
		[theme.breakpoints.down('md')]: {
			padding: '50px 0px 50px 0px',
		},
	},

	starBox: {
		margin: '15px 0px 0px 0px',
	},

	reviewContainer: {
		marginTop: '50px',
	},

	media: {
		height: '300px',

		[theme.breakpoints.down('sm')]: {
			height: '390px',
		},
	},

	buyBtn: {
		marginTop: '20px',
		marginBottom: '20px',
		padding: '10px 60px',
		borderRadius: '50px',
		backgroundColor: '#3f51b5',
		color: 'whitesmoke',
		boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2)',
		textTransform: 'uppercase',

		'&:hover': {
			backgroundColor: '#2b40b5',
			color: 'white',
			boxShadow: '0px 4px 1px -2px rgba(0,0,0,0.4)',
		},
	},
}));
