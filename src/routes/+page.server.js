import { CONTENT_API } from "$env/static/private"
import { GraphQLClient, gql } from "graphql-request"

export async function load() {
	const hygraph = new GraphQLClient(CONTENT_API, { headers: {} })
	const query = gql`
	query Pages {
		page(where: {slug: "start"}, locales: en) {
			content
			title
		}
	}
	`
	return await hygraph.request(query)
}