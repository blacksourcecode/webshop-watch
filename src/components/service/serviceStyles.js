import { makeStyles } from '@material-ui/core/styles';

export const useServiceStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: '50px 0px 100px 0px',
		backgroundColor: 'whitesmoke',

		[theme.breakpoints.down('xs')]: {
			padding: '50px 0px 20px 0px',
		},
	},

	wrapper: {
		padding: '40px 15px 40px 15px',
		maxWidth: '1125px',
		margin: '0 auto',
	},

	titleHading: {
		fontSize: '36px',
		lineHeight: '45px',
		fontWeight: '600',
		color: '#222',

		[theme.breakpoints.down('xs')]: {
			fontSize: '25px',
		},
	},

	subtitleHeading: {
		fontSize: '14px',
		lineHeight: '23px',
		fontWeight: '300',
		color: '#777',

		[theme.breakpoints.down('xs')]: {
			fontSize: '13px',
		},
	},

	contentDiv: {
		width: '100%',
		borderRightColor: 'yellow',
	},

	paper: {
		padding: '30px',
		backgroundColor: '#ececec',

		'&:hover': {
			transition: 'all 0.3s ease 0s',
			outline: 'rgba(119, 119, 119) dashed 0px',
			boxSizing: 'border-box',
			boxShadow: 'rgba(35, 94, 231, 0.2) 4px 4px',
		},
	},

	serviceTitle: {
		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '22px',
		marginBottom: '20px',
	},

	serviceTxt: {
		fontWeight: '300',
		fontSize: '14px',
		lineHeight: '23px',
		color: '#777',
	},

	serviceContainer: {
		marginTop: '50px',
	},
}));
