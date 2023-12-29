import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_VOLUNTEER from './volunteer.params';
import MY_SKILLS from './skills.params';
import MY_HONORS from './honors.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams,
	type VolunteerPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Slick template with Svelte';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education',
	volunteer:'Volunteer Experience',
	Awards:'Honors and Awards'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Geethmaka',
	lastName: 'Dissanayake',
	description:
		'Computer science student based in Canada.',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/geethmaka' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/u/geethmaka'
		},
		{
			platform: Platform.Email,
			link: 'geethmaka@gmail.com'
		},
		{
			platform: Platform.Facebook,
			link: 'https://www.facebook.com/geethmaka'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};

export const VOLUNTEER: VolunteerPageParams = {
	items: MY_VOLUNTEER,
	title: 'Volunteer Experiences'
};

export const HONORS: VolunteerPageParams = {
	items: MY_HONORS,
	title: 'Honors and Awards'
};

