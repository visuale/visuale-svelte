<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';

	const queryClient = new QueryClient();
</script>

<header>Header</header>
<nav>
	<a href="/">Home</a>
	<a href="/projects">Projects</a>
	<a href="/about">About</a>
	<a href="/contact">Contact</a>
</nav>
<main>
	<QueryClientProvider client={queryClient}>
		{@render children()}
	</QueryClientProvider>
</main>
<footer>Footer</footer>
