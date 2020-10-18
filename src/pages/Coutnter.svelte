<script>
    import {onDestroy} from "svelte";
    import Increment from '../components/Increment.svelte';
    import Decrement from '../components/Decrement.svelte';
    import Reset from '../components/Reset.svelte';
    import { count, countInstance } from '../store';

    let count_value;
    let toggleCounts = true;
    const unsubscribe = count.subscribe(value => {
        count_value = value;
    });

    onDestroy(unsubscribe)
</script>

<label for="toggle">
  Toggle counters
  <input type="checkbox" id="toggle" bind:checked={toggleCounts}>
</label>

{@debug toggleCounts}

{#if toggleCounts}
  <h1>The count is {count_value}</h1>
  <Increment/>
  <Decrement/>
  <Reset/>
  {:else}
  <h1>Custom count is {$countInstance}</h1>
  <button on:click={countInstance.increment}>Increment</button>
  <button on:click={countInstance.decrement}>Decrement</button>
  <button on:click={countInstance.reset}>Reset</button>
{/if}


