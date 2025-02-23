import { gql } from 'graphql-request';

export const imgTilesQuery = gql`
	query ProjectsQueryForMastheadByID {
		developmentProjects(where: { status: PUBLISH }, first: 100) {
			nodes {
				featuredImage {
					node {
						mediaDetails {
							sizes(include: THUMBNAIL) {
								name
								sourceUrl
							}
						}
						altText
					}
				}
				databaseId
				title
			}
		}
	}
`;

export const homePageQuery = gql`
	query HomePageQuery {
		page(id: "287", idType: DATABASE_ID) {
			content
			title
		}
	}
`;

export const developmentProjectsQuery = gql`
	query ProjectsQuery {
		page(id: "278", idType: DATABASE_ID) {
			content
			title
		}
		developmentProjects(where: { status: PUBLISH }, first: 1000) {
			nodes {
				featuredImage {
					node {
						altText
						sourceUrl(size: MEDIUM)
					}
				}
				title
				slug
				id
			}
		}
	}
`;

export const aboutQuery = gql`
	query ProjectsQuery {
		pageBy(pageId: 281) {
			content
			title
		}
		developmentProjects(first: 1000) {
			nodes {
				clientInformation {
					clientName
				}
			}
		}
		designProjects(first: 1000) {
			nodes {
				clientInformation {
					clientName
				}
			}
		}
	}
`;

export const projectQuery = (slug: string) => {
	return gql`
    query ProjectsQuery {
        developmentProject(idType: SLUG,id: "${slug}") {
          id
          clientInformation {
            clientLocation
            clientName
            clientNotes
            clientUrl
            endDate
            fieldGroupName
            projectUrl
            startDate
          }
          developmentProjectFieldGroup {
            fieldGroupName
            projectNotes
            seoAndWebMarketing
            uxPrototyping
            webApi
            webDesignWork
            programmingLanguages
            javascriptAndJsFrameworks
            formattingAndPatternFrameworks
            ecommercePlatforms
            databaseLanguage
            contentManagementSystems
          }
          featuredImage {
            node {
              id
              altText
              sourceUrl
            }
          }
          projectStatusFields {
            fieldGroupName
          }
          title
        }
      }
    `;
};

// Contact page info only (contact form uses standard fetch)
export const contactQuery = gql`
	query contactQuery {
		page(id: "344", idType: DATABASE_ID) {
			id
			content
			title
		}
	}
`;
