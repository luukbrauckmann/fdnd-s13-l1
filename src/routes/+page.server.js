import { createClient } from '$lib/prismicio';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const client = createClient()
	const { data } = await client.getSingle('main')

	return { page: data }
}