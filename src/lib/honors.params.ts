import type { Project } from './types';
import Assets from './data/assets';
import { getSkills } from './skills.params';

const MY_HONORS: Array<Project> = [
	{
		slug: 'portfolio-covid',
		color: '#5e95e3',
		description: '',
		shortDescription: 'Covid-19 information tracker webpage + PWA using government provided API ',
		links: [],
		logo: Assets.Unknown,
		name: "Dean's award - Algoma University",
		skills: getSkills('js', 'html', 'css'),
		type: '2021',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: 'portfolio-covid',
		color: '#5e95e3',
		description: '',
		shortDescription: 'Covid-19 information tracker webpage + PWA using government provided API ',
		links: [],
		logo: Assets.Unknown,
		name: 'President Scouts Award - Sri Lanka',
		skills: getSkills('js', 'html', 'css'),
		type: '2019',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: 'portfolio-covid',
		color: '#5e95e3',
		description: '',
		shortDescription: 'Covid-19 information tracker webpage + PWA using government provided API ',
		links: [],
		logo: Assets.Unknown,
		name: 'Finalist - Google Code In 2018',
		skills: getSkills('js', 'html', 'css'),
		type: '2018',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	}
];
export default MY_HONORS;
