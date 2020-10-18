<script>
    import { fly } from 'svelte/transition';
    import { time, elapsed } from '../store';
    import { getContext } from 'svelte';
    const answer = getContext('answer');

    let checked = true;
    const formatter = new Intl.DateTimeFormat('en', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    });
</script>

<h1>The time is {formatter.format($time)}</h1>

<label for="toggle">
  Toggle view
  <input type="checkbox" id="toggle" bind:checked>
</label>

{#if checked}
<p transition:fly="{{ y: 200, duration: 1000 }}">
  This page has been open for
      <span>
      {$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
      </span>
</p>
{/if}

<span>{answer}</span>
