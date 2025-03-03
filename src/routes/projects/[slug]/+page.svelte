<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';
	import { request } from 'graphql-request';
	import { projectQuery } from '$lib/gqlRequests';
	import { PUBLIC_APP_API_URL } from '$env/static/public';
	import { page } from '$app/state';

	const slug = page.params.slug;

	const queryResult = async () => await request(PUBLIC_APP_API_URL, projectQuery(slug));

	const pageContent = useQuery({
		queryKey: ['getProject'],
		queryFn: () => queryResult()
	});
</script>

{#if $pageContent.isLoading}
	Loading...
{:else if $pageContent.error}
	An error has occurred
	{$pageContent.error}
{:else}
	<div>
		<h1>{$pageContent?.data?.developmentProject?.title}</h1>
		<h1>{$pageContent?.data?.developmentProject?.clientInformation?.clientLocation}</h1>
	</div>
{/if}
