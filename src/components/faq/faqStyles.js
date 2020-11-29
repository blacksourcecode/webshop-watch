import ImageBg from '../../images/faq-bg.jpg';
import { makeStyles } from '@material-ui/core/styles';

export const useFaqStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		background: `url(${ImageBg}) center`,
		backgroundSize: 'cover',
		padding: '80px 0px 80px 0px',
	},

	titleHading: {
		fontSize: '36px',
		lineHeight: '45px',
		fontWeight: '600',
		color: '#222',

		[theme.breakpoints.down('xs')]: {
			fontSize: '27px',
		},
	},

	subtitleHeading: {
		fontSize: '14px',
		lineHeight: '23px',
		fontWeight: '300',
		color: '#777',
		marginBottom: '85px',

		[theme.breakpoints.down('xs')]: {
			marginBottom: '45px',
		},
	},

	wrapper: {
		maxWidth: '1125px',
		margin: '0 auto',
	},

	contentDiv: {
		width: '100%',
	},

	heading: {
		fontSize: theme.typography.pxToRem(15),
	},

	toggleWrapper: {
		width: '50%',
		paddingLeft: '15px',

		[theme.breakpoints.down('sm')]: {
			width: '55%',
		},

		[theme.breakpoints.down('xs')]: {
			width: '90%',
		},
	},

	toggleDiv: {
		marginTop: '15px ',
	},
}));
