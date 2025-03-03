export interface ProjectNodes {
	nodes: {
		featuredImage: {
			node: {
				altText?: string;
				sourceUrl?: string;
			};
		};
		title?: string;
		slug?: string;
		id?: number;
	}[];
}
