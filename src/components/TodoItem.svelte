<script>
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';

    export let id, title, completed;

    const dispatch = createEventDispatcher();

    function deleteTodo() {
        dispatch('deleteTodo', {
            id: id
        });
    }

    function toggleComplete() {
        dispatch('toggleComplete', {
            id: id
        })
    }
</script>

<style>
    .todo-item {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        animation-duration: 0.3s;
    }
    .remove-item {
        cursor: pointer;
        margin-left: 15px;
    }
    .remove-item:hover {
        color: lightseagreen;
    }
    .todo-item-left {
        display: flex;
        align-items: center;
    }
    .todo-item-label {
        border: 1px solid white;
        margin-left: 12px;
        cursor: pointer;
    }
    .completed {
        text-decoration: line-through;
        color: grey;
    }
    .checkbox-item {
        cursor: pointer;
    }
</style>

<div class="todo-item">
  <div class="todo-item-left" transition:fly="{{ y: 20, duration: 300 }}">
    <label>
      <input class="checkbox-item" id={title} type="checkbox" bind:checked={completed} on:change={toggleComplete}>
    </label>
    <label for={title} class="todo-item-label" class:completed={completed}>{title}</label>
  </div>
  <div class="remove-item" on:click={deleteTodo}>
    ×
  </div>
</div>
