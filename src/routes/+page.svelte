<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script lang="ts">
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';

	export const data = {};
	$: visible_secondary_header = false;

	setTimeout(() => {visible_secondary_header = true}, 200)

</script>

<head>
	<meta content="Victor's Portfolio" property="og:title" />
	<meta content="Victor's portfolio of coding projects and development experience" property="og:description" />
	<meta content="https://veeisforvanana.github.io/My-Portfolio/" property="og:url" />
	<meta content="#43B581" data-react-helmet="true" name="theme-color" />
</head>

<div class="container h-full flex justify-center items-center mx-20 max-w-screen-lg prose dark:prose-invert">
	<div class="space-y-5">
		<h1 class="h1" style={visible_secondary_header ? "margin-bottom:0px" : "margin-bottom:68px"}>Hi, I'm <span class="text-secondary-500">Victor</span>!</h1>
		{#if visible_secondary_header}
			<h3 class="h5 mb-1" transition:fly={{duration: 350, y:-50}}>Welcome to my portfolio.</h3>
		{/if}
		<p>I am a student at the University of the Philippines Diliman currently undergoing the <span class="text-secondary-600">Bachelor of Science in Computer Science</span> program (Batch 2021, expected graduation in 2025). This portfolio is intended to showcase my projects, skills, and experience as a developer, along with a few other things.</p>

		<div class="shadow-md p-4 bg-surface-900/10 rounded-lg text-tertiary-500">
			<h3 class="h3 mt-2 text-inherit">Navigate using these links!</h3>
			<ul class="list-none">
				<li><p><a href={base + "/about-me"}>About Me</a> for tidbits about me personally, my education, and experience</p></li>
				<li><p><a href={base + "/projects"}>My Projects</a> for information about my projects</p></li>
			</ul>
		</div>
	</div>
</div>
