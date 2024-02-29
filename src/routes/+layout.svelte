<script lang="ts">
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { AppShell, AppBar, storeHighlightJs, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { base } from '$app/paths';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// currentTile for AppRail
	let currentTile: number | null = 1;

	import { page } from '$app/stores';
	import { EllipsisHorizontal, HammerOutline, HammerSharp, Home, PersonCircle } from 'svelte-ionicons';
</script>

<svelte:head>
	<title>{ $page.data.title }</title>
</svelte:head>


<AppShell>
	<svelte:fragment slot="header">
		<AppBar>Victor's Portfolio</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<svelte:fragment slot="lead">
				<AppRailAnchor href={base + "/"}><div class="flex justify-center items-center"><Home size="40"/></div></AppRailAnchor>
			</svelte:fragment>
			<!-- --- -->
			<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
				<svelte:fragment slot="lead"><div class="flex justify-center items-center"><PersonCircle size="35"/></div></svelte:fragment>
				<span>About Me</span>
			</AppRailTile>
			<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
				<svelte:fragment slot="lead"><div class="flex justify-center items-center"><HammerSharp size="35"/></div></svelte:fragment>
				<span>Projects</span>
			</AppRailTile>
			<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
				<svelte:fragment slot="lead"><div class="flex justify-center items-center"><EllipsisHorizontal size="35"/></div></svelte:fragment>
				<span>Others</span>
			</AppRailTile>
			<!-- --- -->
			<svelte:fragment slot="trail">
				<AppRailAnchor href={base + "/"} target="_blank" title="Account">(icon)</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
