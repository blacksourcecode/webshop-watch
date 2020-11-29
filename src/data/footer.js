import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export const footerData = {
	about: {
		title: 'About',
		txt:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.',
	},

	newsletter: {
		title: 'Newsletter',
		subtitle: 'Stay update with our latest',
	},

	social: {
		title: 'Follow Us',
		subtitle: 'Let us be social',
		socials: [
			{
				id: 'fa',
				icon: <FacebookIcon />,
				link: '#',
				color: 'transparent',
			},
			{
				id: 'tw',
				icon: <TwitterIcon />,
				link: '#',
				color: 'transparent',
			},
			{
				id: 'in',
				icon: <InstagramIcon />,
				link: '#',
				color: 'transparent',
			},
			{
				id: 'yo',
				icon: <YouTubeIcon />,
				link: '#',
				color: 'transparent',
			},
		],
	},

	copy: {
		txt:
			'Copyright ©2020 All rights reserved | This theme was inspired by Colorlib',
	},
};
