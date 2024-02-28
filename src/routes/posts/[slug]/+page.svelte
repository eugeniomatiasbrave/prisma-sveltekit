<script>
	export let data;

function formatDate(date) {
  return new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date)
}

</script>

<h1>Posts !!!</h1>

<hgroup>
  <h1>{data.post.title}</h1>
  <h2>{formatDate(data.post.createdAt)}</h2>
</hgroup>

<div class="content">
  {@html data.post.content}
</div>