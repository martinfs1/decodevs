import React from 'react'

import FirstView from '../components/FirstView';
import Footer from '../components/Footer';
import Form from '../components/Form'
import Lenguajes from '../components/Lenguajes';
import { Proyectos } from '../components/Proyectos';
import { Nosotros } from '../components/Nosotros'

function HomePages() {
	return (
		<div>
			<FirstView />
			<Lenguajes />
			<Proyectos />
			<Form />
			<Nosotros />
			<Footer />
		</div>
	)
}

export default HomePages;