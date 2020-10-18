<script>
    import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from 'svelte';
    let promise

    let data;
    onMount(() => {
        promise = getRandomNumber();
    });
    async function getRandomNumber() {
        const res = await fetch(`https://svelte.dev/tutorial/random-number`);
        const text = await res.text();

        if (res.ok) {
            return text;
        } else {
            throw new Error(text);
        }
    }

    beforeUpdate(() => console.log('run before update'))
    afterUpdate(() => console.log('run after update'))

    onDestroy(() => console.log('destroy'));

    tick() //wait til the state is actually changed

    function handleClick() {
        promise = getRandomNumber();
    }
</script>

<button on:click={handleClick}>
  generate random number
</button>

{#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
