<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from './Navbar/Navbar.svelte';
	import Topbar from './Topbar.svelte';
	import { inject } from '@vercel/analytics';

	inject();

	let show: boolean = false;
	onMount(() => {
		show = true;
	});

	let open = false;
</script>

<div class="page-wrapper">
	<div>
		<Topbar bind:sidebar={open} />
	</div>

	<div class="body-columns">
		<div class="navbar">
			<Navbar bind:open />
		</div>

		{#if show}
			<div class="slotted">
				<slot />
			</div>
		{/if}
	</div>
</div>

<style global>
	.page-wrapper {
		display: flex;
		flex-direction: column;
		padding: 1em;
		height: 100%;
	}

	.body-columns {
		justify-content: space-between;
		display: flex;
		flex-direction: row;
		height: 20%;
		flex: 1;
		margin-top: 8px;
	}

	.navbar {
		display: flex;
		height: 100%;
	}

	.slotted {
		display: flex;
		height: 100%;
		width: 100%;
		z-index: 0;
	}

	@media only screen and (max-width: 767px) {
		.slotted {
			display: flex;
			flex: 1 0 90%;
			max-height: 90vh;
		}

		.navbar {
			width: 0%;
			flex: 0 0 0%;
		}

		.body-columns {
			max-height: 88vh;
		}
	}
</style>
