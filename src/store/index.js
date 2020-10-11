import { writable } from 'svelte/store';

export const count = writable(0);

const customCount = () => {
    const { set, subscribe, update } = writable(0);
    return {
        subscribe,
        increment: () => update(n => n + 1),
        decrement: () => update(n => n - 1),
        reset: () => set(0),
    };
};

export const countInstance = customCount();
