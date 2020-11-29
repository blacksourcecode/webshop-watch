import { makeStyles } from '@material-ui/core/styles';

export const useMenuStyles = makeStyles((theme) => ({
	toolbarMenu: {
		margin: '0 auto',
		maxWidth: '1175px',
	},

	toolbarWrapper: {
		width: '100%',
	},

	flexSpase: {
		flexGrow: 1,
	},

	logo: {
		fontSize: '18px',
		'&:focus, &:hover, &:visited, &:link, &:active': {
			textDecoration: 'none',
			color: 'white',
		},

		'&:hover': {
			color: '#ccc',
		},
	},

	menuLink: {
		marginRight: '18px',
		fontSize: '18px',
		'&:focus, &:visited, &:link, &:active': {
			textDecoration: 'none',
			color: 'white',
		},

		'&:hover': {
			color: '#ccc',
		},
	},

	menuLinkGithub: {
		position: 'relative',
		top: '5px',
		'& svg': {
			fontSize: '22px',
			color: 'whitesmoke',
		},

		'& svg:hover': {
			color: '#ccc',
		},
		'&:focus, &:visited, &:link, &:active': {
			textDecoration: 'none',
			color: 'white',
		},
	},

	menuLinksWrapper: {
		[theme.breakpoints.up('lg')]: {
			display: 'block',
		},
		[theme.breakpoints.up('md')]: {
			display: 'block',
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},

	toggleMenu: {
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
		[theme.breakpoints.down('sm')]: {
			display: 'block',
			marginRight: '20px',
		},
	},

	appBarTransparent: {
		padding: '10px',
		background: 'transparent',
		boxShadow: 'none',

		[theme.breakpoints.down('md')]: {
			padding: '0px',
		},
	},
	appBarSolid: {
		backgroundColor: 'rgba(0, 0, 0,0.8)',
	},
}));
