/** @type {import('./$types').RequestHandler} */

import { json } from '@sveltejs/kit';
import db from '$lib/Database';
export async function GET(event) {

	console.log(event); // metodo para ver en terminal los datos desde node.js

	const posts = await db.post.findMany({
			take: Math.round(Math.random() * 30)   
		});

		event.setHeaders({
			'Cache-Control': 'max-age=60',
		})
		
	return json(posts)
}