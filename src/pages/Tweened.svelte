<script>
  import { fade } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  const progress = tweened(0, {
     duration: 100,
     easing: cubicOut,
  });

  let visible = true;

  const buttonValue = [0, .25, .50, .75, 1];
</script>

<style>
  progress {
      display: block;
      width: 100%;
  }
</style>

<label>
  <input type="checkbox" bind:checked={visible}>
  Visible toggle
</label>

<progress value={$progress}></progress>

{#if visible}
  {#each buttonValue as value (value)}
    <button transition:fade on:click={() => progress.set(value)}>{value * 100}%</button>
  {/each}
{/if}

