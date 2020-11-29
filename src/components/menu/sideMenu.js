import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import CancelIcon from '@material-ui/icons/Cancel';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import LanguageIcon from '@material-ui/icons/Language';
import WatchIcon from '@material-ui/icons/Watch';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import {
	List,
	Drawer,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import { useSideMenuStyles } from './styles/sideMenuStyles';

const SideMenu = () => {
	const classes = useSideMenuStyles();
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, left: open });
	};

	const closeSideMenu = () => {
		setState({ ...state, left: false });
	};

	const list = () => (
		<>
			<List className={classes.menuListWrapper}>
				{['home', 'about', 'service', 'watches', 'review', 'faq'].map(
					(text, index) => (
						<ListItem button key={text}>
							<AnchorLink
								className={classes.menuLinks}
								href={`#${text.toString()}`}
							>
								<ListItemIcon>
									{(() => {
										switch (index) {
											case 0:
												return <HomeIcon />;
											case 1:
												return <PlayCircleFilledIcon />;
											case 2:
												return <LanguageIcon />;
											case 3:
												return <WatchIcon />;
											case 4:
												return <AnnouncementIcon />;
											case 5:
												return <ContactSupportIcon />;
											default:
												return <HomeIcon />;
										}
									})()}
								</ListItemIcon>
								<ListItemText className={classes.menuLinkTxt} primary={text} />
							</AnchorLink>
						</ListItem>
					)
				)}
			</List>
			<Divider />
			<div className={classes.afterLinksWrapper}></div>
		</>
	);

	return (
		<div>
			<div>
				<IconButton
					onClick={toggleDrawer('left', true)}
					edge='start'
					className={classes.menuButton}
					color='inherit'
					aria-label='menu'
				>
					<MenuIcon />
				</IconButton>
				<Drawer
					anchor='left'
					open={state['left']}
					onClose={toggleDrawer('left', false)}
				>
					<div className={classes.cancelWrapper}>
						<IconButton className={classes.cancelBtn} onClick={closeSideMenu}>
							<CancelIcon />
						</IconButton>
					</div>
					<Divider />
					<Link
						href='https://github.com/blacksourcecode/webshop-watch'
						rel='noreferrer'
						target='_blank'
						underline='none'
					>
						<ListItem>
							<ListItemIcon>
								<GitHubIcon />
							</ListItemIcon>
							<ListItemText
								className={classes.menuLinkTxtGitHub}
								primary='GitHub'
							/>
						</ListItem>
					</Link>
					{list('left')}
				</Drawer>
			</div>
		</div>
	);
};

export default SideMenu;
