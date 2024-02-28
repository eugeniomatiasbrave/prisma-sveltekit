import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
import db from '$lib/Database';

export async function load({params}) {
	console.log(params);

	const post = await db.post.findUnique({
		where: { slug: params.slug}		
	})

	if(!post){
		throw error(404, 'Post not found')
	}
	return {
		post
	}
}