import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'intern-web-dev',
		company: 'Kongcepts Sri Lanka',
		description:
			'Worked as a both front end and backend developer.Worked with NodeJs, ReactJs, Angular, Laravel, PHP and Wordpress.Worked with MySql and Mongodb.Making web pages compatible for people with disabilities',
		contract: ContractType.Freelance,
		type: 'Web Development',
		location: 'Kandy',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 6, 31) },
		skills: getSkills('react', 'ts', 'sass', 'css', 'html', 'js', 'mongo','node','angular','php'),
		name: 'Intern - Kongcepts Sri Lanka',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description:
			'Worked as a both front end and backend developer. Mainly worked with svelteJs and firebase',
		contract: ContractType.Freelance,
		type: 'Web Development',
		location: 'Home',
		period: { from: new Date(2020, 0, 1), to: new Date(2021, 0, 1) },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js', 'firebase'),
		name: 'Junior Freelancer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'ffff'
	}
];

export default MY_EXPERIENCES;
