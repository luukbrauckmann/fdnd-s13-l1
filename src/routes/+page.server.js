import { client } from '$lib/prismicio';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const { data } = await client.getSingle('main')

	if (data) {
		return { page: data }
	}

	throw error(404, 'Not found')
}