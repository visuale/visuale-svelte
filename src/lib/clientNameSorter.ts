interface ListSorterProps {
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
export default function clientNameSorter(devNodes: ListSorterProps[], desNodes: ListSorterProps[]) {
	const list: string[] = [];

	if (devNodes?.length) {
		devNodes?.map((e: ListSorterProps) => {
			list.push(e?.clientInformation?.clientName);
		});
	}

	if (desNodes?.length) {
		desNodes?.map((e: ListSorterProps) => {
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
