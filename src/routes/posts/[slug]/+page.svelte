<script>
	export let data;

function formatDate(date) {
  return new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date)
}

</script>

<hgroup>
  <h1>{data.post.title}</h1>
  <h2>{formatDate(data.post.createdAt)}</h2>
</hgroup>

<div class="content">
  {@html data.post.content}
</div>

<div class='posts'>
<h3>Posts Recomendados</h3>
<ul>
  {#each data.posts as {slug , title}}
  <li>
    <a href="/posts/{slug}">{title}</a>
  </li>
  {/each}
</ul>
</div>

<style>
  .posts {
    margin-top: 2rem;
    padding: 1rem; 
    border: 1px solid #fcfcfc;
  }
</style>