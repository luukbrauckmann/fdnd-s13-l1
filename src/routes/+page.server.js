import { client } from '$lib/server/prismicio';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const { data } = await client.getSingle('main')

	if (data) {
		return { page: data }
	}

	throw error(404, 'Not found')
}