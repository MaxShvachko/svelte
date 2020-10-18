<script>
  import { onMount } from 'svelte';
  import Slot from '../components/Slot.svelte';

  let a = 1;
  let b = 2;
  let yes = false;

  let div;
  onMount(() => console.log(div))
  let name = '';
</script>

<div>
  <Slot>
    <div slot="input-slot">
      <h2>Input binding value = {name}</h2>
      <label>
        <input type="text" bind:value={name}/>
      </label>
    </div>
  </Slot>
  <!-- Input range and number checkbox -->

  <h2> Input range and number checkbox </h2>
  <div bind:this={div}>
    <label>
      <input type=number bind:value={a} min=0 max=10>
      <input type=range bind:value={a} min=0 max=10>
    </label>

    <label>
      <input type=number bind:value={b} min=0 max=10>
      <input type=range bind:value={b} min=0 max=10>
    </label>

    <label>
      <input type=checkbox bind:checked={yes}>
      Yes! Send me regular email spam
    </label>

    {#if yes}
      <p>Thank you. We will bombard your inbox and sell your personal details.</p>
    {:else}
      <p>You must opt in to continue. If you're not paying, you're the product.</p>
    {/if}

    <button disabled={!yes}>
      Subscribe
    </button>

    <p>{a} + {b} = {a + b}</p>
  </div>

  <h2>Binding select</h2>

</div>
