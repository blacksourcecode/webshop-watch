import { makeStyles } from '@material-ui/core/styles';
import headerBg from '../../images/header-bg.png';

export const useHeaderStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		top: '-65px',
		position: 'relative',
		background: `url(${headerBg}) center`,
		backgroundSize: 'cover',
	},

	title: {
		fontSize: '16px',
		fontWeight: '400',
		lineHeight: '19px',
		color: '#fff',
		letterSpacing: '3px',
	},

	subTitle: {
		margin: '10px 0px 10px 0px',
		fontSize: '45px',
		fontWeight: '700',
		lineHeight: '55px',
		color: '#fff',
		letterSpacing: '2px',

		[theme.breakpoints.down('xs')]: {
			fontSize: '37px',
		},
	},

	btnWrapper: {
		'&:focus, &:hover, &:visited, &:link, &:active': {
			textDecoration: 'none',
		},
	},

	btn: {
		marginTop: '20px',
		padding: '7px 60px',
		borderRadius: '50px',
	},

	headerArea: {
		height: '800px',
		paddingTop: '225px',
	},
}));
