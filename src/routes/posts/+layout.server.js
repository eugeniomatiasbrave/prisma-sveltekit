/** @type {import('./$types').PageLoad} */
import db from '$lib/Database';
export async function load() {
	const posts = await db.post.findMany({
		select: {
			title: true,
			slug: true,
		},
		take: 4
	});

	return {
		posts
	};
}