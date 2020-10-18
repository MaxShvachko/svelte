<script>
    import { count } from '../store';

    function decrement() {
        count.update(n => n - 1);
    }
</script>

<button on:click={decrement}>
  -
</button>
