import type { Project } from './types';
import Assets from './data/assets';
import { getSkills } from './skills.params';

const MY_VOLUNTEER: Array<Project> = [
	{
		slug: '10',
		color: '#5e95e3',
		description: '',
		shortDescription: '',
		links: [],
		logo: Assets.Unknown,
		name: "Let's Hashcode with FOSS SL- Comittee",
		skills: getSkills('js', 'html', 'css'),
		type: '2022',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: '9',
		color: '#5e95e3',
		description: '',
		shortDescription: '',
		links: [],
		logo: Assets.Unknown,
		name: 'Why Rust - Comittee',
		skills: getSkills('js', 'html', 'css'),
		type: '2022',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: '8',
		color: '#5e95e3',
		description: '',
		shortDescription: '',
		links: [],
		logo: Assets.Unknown,
		name: 'Hola Mozilla 2.0 - Comittee',
		skills: getSkills('js', 'html', 'css'),
		type: '2021',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: '7',
		color: '#5e95e3',
		description: '',
		shortDescription: '',
		links: [],
		logo: Assets.Unknown,
		name: 'Hacktoberfest with QUINE - Comittee',
		skills: getSkills('js', 'html', 'css'),
		type: '2021',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: '6',
		color: '#5e95e3',
		description: '',
		shortDescription: '',
		links: [],
		logo: Assets.Unknown,
		name: 'Hacktoberfest - Comittee',
		skills: getSkills('js', 'html', 'css'),
		type: '2021',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: '5',
		color: '#5e95e3',
		description: '',
		shortDescription: '',
		links: [],
		logo: Assets.Unknown,
		name: 'Software Freedom Day - Comittee',
		skills: getSkills('js', 'html', 'css'),
		type: '2021',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: '4',
		color: '#5e95e3',
		description: '',
		shortDescription: '',
		links: [],
		logo: Assets.Unknown,
		name: 'Cyber Con - Comittee',
		skills: getSkills('js', 'html', 'css'),
		type: '2021',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: '3',
		color: '#5e95e3',
		description: '',
		shortDescription: '',
		links: [],
		logo: Assets.Unknown,
		name: "Let's Crowdsource - Comittee",
		skills: getSkills('js', 'html', 'css'),
		type: '2021',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: '2',
		color: '#5e95e3',
		description: '',
		shortDescription: '',
		links: [],
		logo: Assets.Unknown,
		name: 'Introduction to ethical hacking - Comittee',
		skills: getSkills('js', 'html', 'css'),
		type: '2021',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	},
	{
		slug: '1',
		color: '#5e95e3',
		description: '',
		shortDescription: '',
		links: [],
		logo: Assets.Unknown,
		name: 'Google Hashcode with SLIIT - Comittee',
		skills: getSkills('js', 'html', 'css'),
		type: '2021',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) }
	}
];
export default MY_VOLUNTEER;
