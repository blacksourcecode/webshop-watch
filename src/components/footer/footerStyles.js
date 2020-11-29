import { makeStyles } from '@material-ui/core/styles';

export const useFooterStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#292d3e',
		padding: '15px',
	},

	wrapper: {
		maxWidth: '1125px',
		margin: '0 auto',
	},

	contentDiv: {
		width: '100%',
	},

	title: {
		fontSize: '28px',
		lineHeight: '40px',
		fontWeight: '700',
		color: 'whitesmoke',
	},

	txt: {
		color: '#ccc',
		marginBottom: '15px',
	},

	inlineComponents: {
		display: 'inline-flex',
	},

	inputFooterStyles: {
		color: 'white',
		'& label.Mui-focused': {
			color: 'white',
		},
		'& .MuiOutlinedInput-input': {
			color: 'white',
		},
		'&::placeholder': {
			color: 'white !important',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'whitesmoke',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'whitesmoke',
			},
			'&:hover fieldset': {
				borderColor: 'white',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'white',
			},
		},
	},

	submitBtn: {
		height: '56px',
		marginLeft: '5px',
	},

	paper: {
		padding: theme.spacing(1),
		background: 'transparent',
		boxShadow: 'none',
	},

	copy: {
		color: 'whitesmoke',
		padding: '40px 0px 20px 0px',
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
		},
	},

	socialLinkWrapper: {
		display: 'flex',
		marginTop: '32px',
	},

	socialLink: {
		marginRight: '20px',
		textAlign: 'center',
		lineHeight: '30px',
		fontSize: '20px',
		color: 'white',
		borderRadius: '5px',

		'& svg': {
			fontSize: '40px',
		},

		'&:hover': {
			textDecoration: 'none',
		},
	},
}));
