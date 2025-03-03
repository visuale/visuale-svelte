<script>
	import { useQuery } from '@sveltestack/svelte-query';
	import { request } from 'graphql-request';
	import { aboutQuery } from '$lib/gqlRequests';
	import { PUBLIC_APP_API_URL } from '$env/static/public';
	import clientNameSorter from '$lib/clientNameSorter';
	const queryResult = async () => await request(PUBLIC_APP_API_URL, aboutQuery);
	const pageContent = useQuery({ queryKey: ['pageBy'], queryFn: () => queryResult() });

	//const devProjectNames = useQuery(['developmentProjects'], () => queryResult());
</script>

{#if $pageContent.isLoading}
	Loading...
{:else if $pageContent.error}
	An error has occurred
	{$pageContent.error}
{:else}
	<div>
		<h1>{$pageContent.data.pageBy.title}</h1>
		<div>{@html $pageContent.data.pageBy.content}</div>
		<ul>
			{#each clientNameSorter($pageContent.data.developmentProjects.nodes, $pageContent.data.designProjects.nodes) as client}
				<li>{client}</li>
			{/each}
		</ul>
	</div>
{/if}
