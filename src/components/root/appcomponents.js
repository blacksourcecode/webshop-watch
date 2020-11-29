import React from 'react';
import Menu from '../menu/menu';
import Header from '../header/header';
import Footer from '../footer/footer';
import Faq from '../faq/faq';
import Reviews from '../reviews/reviews';
import Watches from '../watches/watches';
import Service from '../service/service';
import About from '../about/about';

const AppComponents = () => {
	return (
		<>
			<Menu />
			<Header />
			<About />
			<Service />
			<Watches />
			<Reviews />
			<Faq />
			<Footer />
		</>
	);
};

export default AppComponents;
