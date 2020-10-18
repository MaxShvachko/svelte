<script>
    import { Router, Link, Route } from "svelte-routing";
    import Todos from './pages/Todos.svelte'
    import Promise from './pages/Promise.svelte';
    import Counter from './pages/Coutnter.svelte';
    import Bindings from './pages/Bindings.svelte';
    import Tweened from './pages/Tweened.svelte';
    import Slider from './pages/Slider.svelte';
    import Time from './pages/Time.svelte';
    import { setContext } from 'svelte';
    setContext('answer', 42);

    export let url = "";
</script>

<Router url={url}>
  <nav>
    <Link to="/">Todos</Link>
    <Link to="promise">Promise</Link>
    <Link to="animation">Animation</Link>
    <Link to="slider">Slider</Link>
    <Link to="bindings">Bindings</Link>
    <Link to="counter">Counter</Link>
    <Link to="time">Time</Link>
  </nav>
  <div>
    <Route path="promise" component={Promise} />
    <Route path="animation" component={Tweened}/>
    <Route path="slider" component={Slider}/>
    <Route path="bindings" component={Bindings}/>
    <Route path="counter" component={Counter}/>
    <Route path="time" component={Time}/>
    <Route path="/"><Todos /></Route>
  </div>
</Router>
