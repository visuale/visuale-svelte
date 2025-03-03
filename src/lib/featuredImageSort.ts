import type { ProjectNodes } from './types';

export function featuredImageSort({ nodes }: ProjectNodes) {
	const nodesFiltered = nodes?.filter((e) => e?.featuredImage?.node?.sourceUrl);

	return nodesFiltered;
}
