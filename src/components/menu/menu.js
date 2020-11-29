import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import GitHubIcon from '@material-ui/icons/GitHub';
import SideMenu from './sideMenu';
import { useMenuStyles } from './styles/menuStyles';

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

const Menu = (props) => {
	const classes = useMenuStyles();

	const [navBackground, setNavBackground] = useState('appBarTransparent');
	const navRef = React.useRef();
	navRef.current = navBackground;
	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 310;
			if (show) {
				setNavBackground('appBarSolid');
			} else {
				setNavBackground('appBarTransparent');
			}
		};
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar className={classes[navRef.current]}>
					<div className={classes.toolbarWrapper}>
						<Toolbar className={classes.toolbarMenu}>
							<AnchorLink className={classes.logo} href='#home'>
								SmartWatch
							</AnchorLink>
							<div className={classes.flexSpase}></div>
							<div className={classes.toggleMenu}>
								<SideMenu />
							</div>
							<div className={classes.menuLinksWrapper}>
								<AnchorLink className={classes.menuLink} href='#home'>
									Home
								</AnchorLink>
								<AnchorLink className={classes.menuLink} href='#about'>
									About
								</AnchorLink>
								<AnchorLink className={classes.menuLink} href='#service'>
									Service
								</AnchorLink>
								<AnchorLink className={classes.menuLink} href='#watches'>
									Watches
								</AnchorLink>
								<AnchorLink className={classes.menuLink} href='#review'>
									Review
								</AnchorLink>
								<AnchorLink className={classes.menuLink} href='#faq'>
									Faq
								</AnchorLink>
								<Link
									className={classes.menuLinkGithub}
									href='https://github.com/blacksourcecode/webshop-watch'
									rel='noreferrer'
									target='_blank'
								>
									<GitHubIcon />
								</Link>
							</div>
						</Toolbar>
					</div>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
};

export default Menu;
