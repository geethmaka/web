import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science (2022-2024)',
		description: '',
		location: 'Canada',
		logo: Assets.Algoma,
		name: '',
		organization: 'Algoma University',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: []
	},
	{
		degree: 'Higher Diploma in Information Technology (2019-2021)',
		description: '',
		location: 'Sri Lanka',
		logo: Assets.SLIIT,
		name: '',
		organization: 'Sri Lanka Institute of Information Technology',
		period: { from: new Date(2020, 0, 1), to: new Date(2021, 11, 31) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: []
	},
	{
		degree: 'Diploma in Web Engineering (2019)',
		description: 'Pearson Assured',
		location: 'Sri Lanka',
		logo: Assets.Esoft,
		name: '',
		organization: 'ESOFT kandy',
		period: { from: new Date(2019, 9, 1), to: new Date(2019, 12, 31) },
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: []
	},
	{
		degree: 'Diploma in Software Engineering (2019)',
		description: 'Pearson Assured',
		location: 'Sri Lanka',
		logo: Assets.Esoft,
		name: '',
		organization: 'ESOFT Kandy',
		period: { from: new Date(2019, 9, 1), to: new Date(2019, 12, 31) },
		shortDescription: '',
		slug: 'dummy-education-item-4',
		subjects: []
	},
	{
		degree: 'GCE Advanced Level (2019)',
		description: '',
		location: 'Sri Lanka',
		logo: Assets.Kingswood,
		name: '',
		organization: 'Kingswood College Kandy',
		period: { from: new Date(2006, 9, 1), to: new Date(2019, 12, 31) },
		shortDescription: '',
		slug: 'dummy-education-item-5',
		subjects: []
	}
];
// 'Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures'