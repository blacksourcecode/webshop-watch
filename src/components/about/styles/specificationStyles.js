import { makeStyles } from '@material-ui/core/styles';

export const useSpecificationStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: 'whitesmoke',
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

		[theme.breakpoints.down('md')]: {
			fontSize: '30px',
			textAlign: 'center',
		},

		[theme.breakpoints.down('xs')]: {
			fontSize: '25px',
			textAlign: 'center',
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

	specificationTitle: {
		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '22px',
		marginBottom: '20px',
	},

	specificationTxt: {
		fontWeight: '300',
		fontSize: '14px',
		lineHeight: '23px',
		color: '#777',
	},

	contentDiv: {
		padding: '15px',
		width: '100%',
		borderRightColor: 'yellow',
	},

	paper: {
		padding: '20px',
		marginTop: '15px',
		background: 'transparent',
		boxShadow: 'none',
	},

	reviewContainer: {
		marginTop: '50px',
	},
}));
