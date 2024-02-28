import { json } from '@sveltejs/kit';

export function GET() {

    const options = {
        status:200,
        headers: {
            x: 'que es esto!! jaja'
        }
    }
    return new Response('Hola', options);
}

export async function POST (requestEvent) {
    const {request} = requestEvent;
    const data= await request.formData();
    const email = data.get('email');

  console.log(email); 

  return new json(
    {success: true},
    {headers: {'Content-Type': 'application/json'}}
    );
}

