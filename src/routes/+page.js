/** @type {import('./$types').PageLoad} */

export async function load({fetch , depends}) {

   const random = Math.round(Math.random() * 30);

   const response = await fetch(`/api/posts?limit=${random}`);

   const posts = await response.json();

     depends('posts')

	 return {
		posts
	}
}