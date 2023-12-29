<script lang="ts">
	import Chip from '$lib/components/Chip/Chip.svelte';
	import VolunteerCard from '$lib/components/VolunteerCard/VolunteerCard.svelte';
	import { VOLUNTEER } from '$lib/params';
	import type { Project, Skill } from '$lib/types';
	import { onMount } from 'svelte';
	import MY_SKILLS from '$lib/skills.params';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';

	const { items, title } = VOLUNTEER;
</script>

<CommonPage {title}>
		<div class="volunteer-list mt-5">
			{#each VOLUNTEER.items as project}
				<VolunteerCard {project} />
			{/each}
		</div>
</CommonPage>

<style lang="scss">
	.volunteer-list {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-rows: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-rows: repeat(1, 1fr);
		}
	}
</style>
