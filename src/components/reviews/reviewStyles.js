import { makeStyles } from '@material-ui/core/styles';

export const useReviewStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: '50px 0px 100px 0px',
		backgroundColor: 'whitesmoke',
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

	reviewTitle: {
		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '22px',
		marginBottom: '10px',
	},

	reviewTxt: {
		fontWeight: '300',
		fontSize: '14px',
		lineHeight: '23px',
		color: '#777',
	},

	contentDiv: {
		width: '100%',
		backgroundColor: 'whitesmoke',

		[theme.breakpoints.down('md')]: {
			padding: '15px',
		},
	},

	paper: {
		textAlign: 'center',
		padding: '30px',
		backgroundColor: '#ececec',

		'&:hover': {
			transition: 'all 0.3s ease 0s',
			outline: 'rgba(119, 119, 119) dashed 0px',
			boxSizing: 'border-box',
			boxShadow: 'rgba(35, 94, 231, 0.2) 4px 4px',
		},
	},

	starBox: {
		margin: '15px 0px 0px 0px',
	},

	starIconColor: {
		color: '#ffa500',
	},

	starIconNoColor: {
		color: '#ccc',
	},

	reviewContainer: {
		marginTop: '50px',
	},
}));
