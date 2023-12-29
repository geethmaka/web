<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import { base } from '$app/paths';
	import { SKILLS } from '$lib/params';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import type { Skill } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';
	import { getAssetURL } from '$lib/data/assets';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';

	const { items, title } = SKILLS;

	let result: Array<Skill> = items;

</script>

<CommonPage {title}>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
			{#each result as skill (skill.slug)}
				<Card
					classes={['cursor-pointer decoration-none']}
					tiltDegree={1}
					href={`${base}/skills/${skill.slug}`}
					bgImg={getAssetURL(skill.logo)}
				>
					<p class="text-[var(--tertiary-text)]">{skill.name}</p>
				</Card>
			{/each}
		</div>
</CommonPage>
