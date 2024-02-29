<script>
import { invalidate } from '$app/navigation';
  export let data;

  $: ({ posts } = data);

  function correrDeNuevo(){
    // caso a) 
      invalidate('posts');
    // caso b)
    // invalidate('api/posts');
    // caso c)
    // invalidate(url => url.href.includes('posts'));
    // caso d)
    // invalidateAll()
  }

</script>

<h1>Posts</h1>
<div>
  <h4>Uso de invalidate</h4>
  <small>La función invalidate() en SvelteKit se utiliza para forzar la re-ejecución de las funciones load que dependen de una URL específica. Esto es útil cuando los datos que dependen de esa URL han cambiado y necesitas que 
    tu aplicación refleje esos cambios. Es importante tener en cuenta que si una función load se dispara para re-ejecutarse, la página no se volverá a montar, sino que se actualizará con los nuevos datos. Esto significa que se conserva el estado interno de 
    los componentes. Por último, debes tener cuidado al usar invalidate() y invalidateAll(), ya que la re-ejecución frecuente de las funciones load puede tener un impacto en el rendimiento de tu aplicación.
  </small>
  </div>
<button on:click={correrDeNuevo} class="btn">Correr de nuevo</button>

<p>Mostrando {posts.length} Posts.</p>
{#each posts as {slug, title} }
 <ul>
  <li>
    <a href="/posts/{slug}">{title}</a>
  </li>
 </ul> 
{/each}

<style>
  .btn{
    height: 50px;
    width: 200px;
    padding: 0;
    margin: 20px 0 30px 0;
  }
</style>