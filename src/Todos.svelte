<script>
  import TodoItem from './TodoItem.svelte';

  const textWithTag = 'This tag with <strong>Text</strong>';

  let user = { loggedIn: false };

  let newTodoTitle ='';
  let currentFilter = 'all';
  let nextId = 4;

  let todos = [
      {
          id: 1,
          title: 'My first todo',
          completed: false
      },
      {
          id: 2,
          title: 'My second todo',
          completed: false
      },
      {
          id: 3,
          title: 'My third todo',
          completed: false
      },
  ];

  function toggle() {
      user.loggedIn = !user.loggedIn;
  }

  function addTodo(event) {
      if (event.key === 'Enter') {
          todos = [...todos, {
              id: nextId,
              completed: false,
              title: newTodoTitle,
          }]
          nextId++;
          newTodoTitle = "";
      }
  }

  $: todosRemaining = filteredTodos.filter(todo => !todo.completed).length;
  $: filteredTodos = currentFilter === 'all' ? todos : currentFilter === 'completed'
      ? todos.filter(todo => todo.completed)
      : todos.filter(todo => !todo.completed)

  function checkAllTodos(event) {
      todos = todos.map(todo => {
          todo.completed = event.target.checked;
          return todo;
      });
  }

  function updateFilter(newFilter) {
      currentFilter = newFilter;
  }

  function clearCompleted() {
      todos = todos.filter(todo => !todo.completed);
  }

  function handleDeleteTodo(event) {
      todos = todos.filter(todo => todo.id !== event.detail.id);
  }

  function handleToggleComplete(event) {
      todos = todos.map(todo => todo.id === event.detail.id
          ? { ...todo, completed: !todo.completed}
          : todo)
  }
</script>

<style>
    .container {
        max-width: 800px;
        margin: 10px auto;
    }
    .logo {
        display: block;
        margin: 20px auto;
        width: 50%;
    }
    .todo-input {
        width: 100%;
        padding: 10px 20px;
        font-size: 18px;
        margin-bottom: 20px;
    }
    .inner-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        border-top: 1px solid lightgrey;
        padding-top: 15px;
        margin-bottom: 13px;
    }
    .inner-container-input {
        margin-right: 12px;
    }
    button {
        font-size: 14px;
        background-color: white;
        appearance: none;
    }
    button:hover {
        background: lightseagreen;
    }
    button:focus {
        outline: none;
    }
    .active {
        background: lightseagreen;
    }
</style>

<div class="container">
  <p>{@html textWithTag}</p>
  <h2>Svelte Todo App</h2>
  <input type="text" class="todo-input" placeholder="Insert todo item ..." bind:value={newTodoTitle} on:keydown={addTodo}>
  {#each filteredTodos as todo (todo.id)}
    <div class="todo-item">
      <TodoItem {...todo} on:deleteTodo={handleDeleteTodo} on:toggleComplete={handleToggleComplete} />
    </div>
  {/each}
  <div class="inner-container">
    <div>
      <label>
        <input class="inner-container-input" type="checkbox" on:change={checkAllTodos}>
        Check All
      </label>
    </div>
    <div>{todosRemaining} items left</div>
  </div>
  <div class="inner-container">
    <div>
      <button on:click={() => updateFilter('all')} class:active="{currentFilter === 'all'}">All</button>
      <button on:click={() => updateFilter('active')} class:active="{currentFilter === 'active'}">Active</button>
      <button on:click={() => updateFilter('completed')} class:active="{currentFilter === 'completed'}">Completed</button>
    </div>
    <div>
      <button on:click={clearCompleted}>Clear Completed</button>
    </div>
    {#if currentFilter === 'all'}
      Current filter All
    {:else if currentFilter === 'active'}
      Current filter Active
      {:else}
      Current filter Completed
    {/if}
  </div>
</div>
