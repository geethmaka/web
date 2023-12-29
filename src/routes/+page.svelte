<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { TITLE_SUFFIX } from '$lib/params';
	import { HOME, getPlatfromIcon } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { fade, fly } from 'svelte/transition';
	import Name from '$lib/components/Name.svelte';
	import Typed from 'typed.js';
	import anime from 'animejs';

	const { description, lastName, links, name, title, skills } = HOME;

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
	import { onMount } from 'svelte';
	onMount(() => {
		const typed = new Typed('#element', {
			strings: [description],
			typeSpeed: 50
		});
		anime({
			targets: '#socialSet',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 30000,
			delay: function (el, i) {
				return i * 250;
			},
			direction: 'alternate',
			loop: false
		});
		anime({
			loop: false,
			targets: '#socialSet',
			translateX: [20, 0],
			opacity: [0, 1],
			easing: 'easeOutExpo',
			delay: (el, i) => 500 * i
		});
	});
</script>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>
<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<!-- <MainTitle classes="md:text-left ">{name} {lastName},</MainTitle> -->
		<Name />
		<p
			id="element"
			class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight inline"
		/>
		<div id="" class="row justify-center md:justify-start p-y-15px p-x-0px gap-2 css-selector-demo">
			{#each links as link}
				<a
					id="socialSet"
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div>
	<!-- <Carrousel items={skills ?? MY_SKILLS} /> -->
</div>
