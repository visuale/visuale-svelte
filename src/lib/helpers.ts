interface NodeProps {
	clientInformation: {
		clientName: string;
	};
}

/**
 * Combines a list of development projects and design projects' names into an alpha-sorted listed.
 * @param devNodes
 * @param desNodes
 * @returns
 */
export default function listSorter(devNodes: NodeProps[], desNodes: NodeProps[]) {
	const list: string[] = [];

	if (devNodes?.length) {
		devNodes?.map((e: NodeProps) => {
			list.push(e?.clientInformation?.clientName);
		});
	}

	if (desNodes?.length) {
		desNodes?.map((e: NodeProps) => {
			list.push(e.clientInformation.clientName);
		});
	}

	const unique = list.length
		? list.filter((a: string, index: number) => {
				return list.indexOf(a) === index;
			})
		: [];

	return unique?.length ? unique.sort() : ['Client list not available'];
}
