import type { ProjectNodes } from './types';

export function countArray({ nodes }: ProjectNodes) {
	const nodesFiltered = nodes?.filter((e) => e?.featuredImage?.node?.sourceUrl);
	return nodesFiltered?.length.toString() || '';
}
