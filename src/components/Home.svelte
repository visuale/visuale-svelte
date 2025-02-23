<script>
	// Todos.svelte
	import { useQuery } from '@sveltestack/svelte-query';
	import { request } from 'graphql-request';
	import { homePageQuery } from '$lib/gqlRequests';
	import { PUBLIC_APP_API_URL } from '$env/static/public';

	/*
	const queryResult = useQuery('repoData', () => {
		return fetch('https://api.github.com/repos/SvelteStack/svelte-query').then((res) => res.json());
	});

    */

	const queryResult = async () => {
		const { page } = await request(PUBLIC_APP_API_URL, homePageQuery);
		return page;
	};

	const pageContent = useQuery(['page'], () => queryResult());
</script>

{#if $pageContent.isLoading}
	Loading...
{:else if $pageContent.error}
	An error has occurred
	{$pageContent.error}
{:else}
	<div>
		<h1>{$pageContent.data.title}</h1>
		<div>{@html $pageContent.data.content}</div>
	</div>
{/if}

<!--
{#if $queryResult.isLoading}
	Loading...
{:else if $queryResult.error}
	An error has occurred:
	{$queryResult.error}
{:else}
	<div>
		 <h1>{$queryResult.data.name}</h1>
		<h2>Test</h2>
		<p>{$queryResult.data.description}</p>
		<strong>👀 {$queryResult.data.subscribers_count}</strong>{' '}
		<strong>✨ {$queryResult.data.stargazers_count}</strong>{' '}
		<strong>🍴 {$queryResult.data.forks_count}</strong> 
		{$queryResult}
		<p>Test results:</p>
	</div>
{/if}
-->
