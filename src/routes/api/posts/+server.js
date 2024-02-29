/** @type {import('./$types').RequestHandler} */

import { json } from '@sveltejs/kit';
import db from '$lib/Database';
export async function GET({url}) {

	const limit = Number(url.searchParams.get('limit') ?? 30);
    const order =  url.searchParams.get('order') ?? 'asc';

	const posts = await db.post.findMany({
		orderBy: {
			id: order },
		    take: limit
	});

	// http://localhost:5173/api/posts?limit=4&order=desc
	// http://localhost:5173/api/posts?limit=4&order=asc
		
	return json(posts)
}