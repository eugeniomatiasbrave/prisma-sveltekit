<script>

async function subscribe (event){
  const form = event.target
  const data = new FormData(form)
  
  await fetch ('/api/newsletter', {
    method: 'POST',
    body: data
  })
}



async function getPosts() {
  const response = await fetch('api/posts');
  const posts = await response.json();
  return posts;
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

{#await getPosts()}
  <p>loading...</p>
{:then posts}
<p>Mostrando {posts.length}</p>
  {#each posts as post}
    <p>{post.title}</p>
  {/each}
{:catch error}
  <p>{error}</p>
{/await}


<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 30vw;
    height: 35vh;
    margin: 0 0 1rem 0;
    padding: 2rem;
    border: rgb(48, 60, 66) 0.5px solid;
  }
</style>