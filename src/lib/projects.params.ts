import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'portfolio-covid',
		color: '#5e95e3',
		description:
			'A simple web page with progressive web application to display the number of current patients, cured patients, number of deaths and global covid19 statistics with graphical representations.',
		shortDescription: 'Covid-19 information tracker webpage + PWA using government provided API ',
		links: [
			{ to: 'https://hela-pawura.github.io/COVID-19-Sri-Lanka/', label: 'Link' },
			{ to: 'https://github.com/Hela-Pawura/COVID-19-Sri-Lanka', label: 'GitHub' }
		],
		logo: Assets.Unknown,
		name: 'Covid-19 information tracker webpage',
		skills: getSkills('js', 'html', 'css'),
		type: 'PWA',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: 'portfolio-helapawura',
		color: '#ff3e00',
		description:
			'A crowdsourced map to locate the street arts all over the Sri Lanka during the viral trend of drawing street arts in 2019 and users can even upload them with the location tags. Made using firebase and Js',
		shortDescription:
			'A crowdsource map based on google maps to users to add streets arts in their area',
		links: [
			{ to: 'https://art-track.web.app/', label: 'Link' },
			{ to: 'https://github.com/Hela-Pawura/HelaPawura', label: 'GitHub' }
		],
		logo: Assets.Svelte,
		name: 'Helapawura',
		skills: getSkills('js', 'css', 'html', 'firebase'),
		type: 'PWA',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: 'portfolio-smd',
		color: '#ff3e00',
		description:
			'Automated system for SMD Distributors with Java Servlet and MySQL as a project in SLIIT 2nd year ITP module ',
		shortDescription:
			'A fully functioning system with maintaining and updating stock details, employee details and order tracking details',
		links: [
			{ to: 'https://github.com/geethmaka/SMD-Distributors-Automated-System', label: 'GitHub' }
		],
		logo: Assets.Svelte,
		name: 'Automated system for SMD Distributors ',
		skills: getSkills('java', 'css', 'html', 'sql'),
		type: 'Web Application',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: 'portfolio-drug-store',
		color: '#ff3e00',
		description: '',
		shortDescription: 'Online drug store webpage',
		links: [{ to: 'https://github.com/geethmaka/online-drug-store', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Online Drug Store',
		skills: getSkills('java', 'css', 'html', 'sql'),
		type: 'Web Application',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: 'portfolio-drug-store',
		color: '#ff3e00',
		description: '',
		shortDescription: 'Plugin for google chrome to check the EST time at the moment (using an API)',
		links: [{ to: 'https://github.com/geethmaka/EST-Time-Checker', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'EST Time checker',
		skills: getSkills('chrome', 'css', 'html'),
		type: 'Chrome Plugin',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	}
];

export default MY_PROJECTS;
