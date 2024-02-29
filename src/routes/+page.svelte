<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script lang="ts">
	import { fade } from 'svelte/transition';

	export const data = {};
	let visible_secondary_header = true;

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Hi, I'm <span class="text-secondary-500">Victor</span>!</h1>
		{#if visible_secondary_header}
			<h3 transition:fade={{duration: 500}}>Welcome to my portfolio.</h3>
		{/if}
	</div>
</div>
