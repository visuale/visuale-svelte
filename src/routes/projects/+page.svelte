<script>
	import { useQuery } from '@sveltestack/svelte-query';
	import { request } from 'graphql-request';
	import { developmentProjectsQuery } from '$lib/gqlRequests';
	import { PUBLIC_APP_API_URL } from '$env/static/public';
	const queryResult = async () => await request(PUBLIC_APP_API_URL, developmentProjectsQuery);
	const pageContent = useQuery({
		queryKey: ['getDevelopmentProjects'],
		queryFn: () => queryResult()
	});
	import { featuredImageSort } from '$lib/featuredImageSort';
	import { countArray } from '$lib/helpers';
</script>

{#if $pageContent.isLoading}
	Loading...
{:else if $pageContent.error}
	An error has occurred
	{$pageContent.error}
{:else}
	<div>
		<h1>{$pageContent.data.page.title || 'Projects'}</h1>
		<div>{@html $pageContent.data.page.content}</div>
		<ul
			role="list"
			aria-label={`list of ${countArray($pageContent.data.developmentProjects)} projects`}
		>
			{#each featuredImageSort($pageContent.data.developmentProjects) as project}
				<li><a href="/projects/{project.slug}">{project.title}</a></li>
			{/each}
		</ul>
	</div>
{/if}
