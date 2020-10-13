<script>
    import { onDestroy } from 'svelte';
    import { Router, Link, Route } from "svelte-routing";
    import Todos from './Todos.svelte'
    import Numeric from './Numeric.svelte';
    import Promise from './Promise.svelte';
    import { count, countInstance } from './store';
    import Increment from './controlButtons/Increment.svelte';
    import Decrement from './controlButtons/Decrement.svelte';
    import Reset from './controlButtons/Reset.svelte';
    import Tweened from './animation/Tweened.svelte';
    import Slider from './animation/Slider.svelte';

    let count_value;
    export let url = "";

    const unsubscribe = count.subscribe(value => {
        count_value = value;
    });

    onDestroy(unsubscribe)
</script>

<Router url={url}>
  <nav>
    <Link to="/">Todos</Link>
    <Link to="numeric">Numeric</Link>
    <Link to="promise">Promise</Link>
    <Link to="animation">Animation</Link>
    <Link to="slider">Slider</Link>
  </nav>
  <div>
    <Route path="promise" component={Promise} />
    <Route path="numeric" component={Numeric} />
    <Route path="animation" component={Tweened}/>
    <Route path="slider" component={Slider}/>
    <Route path="/"><Todos /></Route>
  </div>
</Router>

<h1>The count is {count_value}</h1>

<!--<h1>Custom count is {$countInstance}</h1>-->
<!--<button on:click={countInstance.increment}>Increment</button>-->
<!--<button on:click={countInstance.decrement}>Decrement</button>-->
<!--<button on:click={countInstance.reset}>Reset</button>-->

<Increment/>
<Decrement/>
<Reset/>
