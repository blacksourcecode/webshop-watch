import { makeStyles } from '@material-ui/core/styles';

export const useDetailsStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	paper: {
		padding: '40px',
		background: 'transparent',
		boxShadow: 'none',
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

	title: {
		marginTop: '60px',
		fontSize: '28px',
		fontWeight: '600',
		lineHeight: '42px',
		color: '#222',
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

	btn: {
		marginTop: '20px',
		padding: '7px 40px',
		borderRadius: '50px',
	},
}));
