import { makeStyles } from '@material-ui/core/styles';

export const useSideMenuStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},

	menuLinks: {
		display: 'inline-flex',

		'&:focus, &:visited, &:link, &:active': {
			textDecoration: 'none',
			color: '#757575',
		},
	},

	menuListWrapper: {
		width: '200px',
	},

	menuLinkTxt: {
		'&::first-letter': {
			textTransform: 'uppercase',
		},
	},

	menuLinkTxtGitHub: {
		'& span': {
			color: '#757575',
		},
	},

	cancelWrapper: {
		backgroundColor: '#585757',
		padding: '10px 0px 10px 60%',
	},

	cancelBtn: {
		'& svg': {
			fontSize: '35px',
			color: '#eaeaea',
		},
	},

	afterLinksWrapper: {
		height: '100%',
		backgroundColor: '#777676',
	},
});
