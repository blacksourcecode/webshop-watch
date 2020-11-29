import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Box, Button, Typography } from '@material-ui/core';
import { useHeaderStyles } from './headerStyles';
import { headerData } from '../../data/header';

const Header = () => {
	const classes = useHeaderStyles();
	return (
		<section className={classes.root} id='home'>
			<div className={classes.headerArea}>
				<Box justifyContent='center' display='flex'>
					<Typography className={classes.title} variant='h1'>
						{headerData.title}
					</Typography>
				</Box>
				<Box justifyContent='center' display='flex'>
					<Typography className={classes.subTitle} variant='h2'>
						{headerData.subTitle}
					</Typography>
				</Box>
				<Box justifyContent='center' display='flex'>
					<AnchorLink className={classes.btnWrapper} href='#watches'>
						<Button className={classes.btn} variant='contained' color='primary'>
							Buy now
						</Button>
					</AnchorLink>
				</Box>
			</div>
		</section>
	);
};

export default Header;
