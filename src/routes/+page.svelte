<script>

  export let data;

  $: ({ posts } = data);

async function subscribe (event){
  const form = event.target
  const data = new FormData(form)
  
  await fetch ('api/newsletter', {
    method: 'POST',
    body: data
  })
}


</script>

  <h1>Home page</h1>

  <div class='container'>
  <h2>Newsletter</h2>
   <form  on:submit|preventDefault={subscribe}>
    <input type="email" name="email">
    <button>Subscribe</button>
  </form>
</div>

<h1>Posts</h1>
<p>Mostrando {posts.length} Posts.</p>
{#each posts as {slug, title} }
 <ul>
  <li>
    <a href="/posts/{slug}">{title}</a>
  </li>
 </ul> 
{/each}

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 40vw;
    height: 35vh;
    margin: 0 0 1rem 0;
    padding: 2rem;
    border: rgb(48, 60, 66) 0.5px solid;
  }
</style>