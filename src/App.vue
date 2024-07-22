<template>
    <div class="body container p-4" @mousemove="addMouseEffect">
        <div class="mouse-effect" ref="mouseEffect"></div>
        <RouterView></RouterView>
    </div>
</template>

<script setup>
import { ref } from "vue";

let mouseCords = ref({
    x: 0,
    x: 0,
});
let mouseEffect = ref(null);

function addMouseEffect(e) {
    mouseCords.value.x = e.clientX;
    mouseCords.value.y = e.clientY;

    mouseEffect.value.style.transform = `translate(${mouseCords.value.x}px, ${mouseCords.value.y}px)`;
}
</script>

<style>
:root {
    --primaryColor: #727376;
    --higlightColor: #a6a6a6;
    --backGround: #141414;
}

* {
    background-color: var(--backGround);
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* font-family: 'Special Elite', 'cursive'; */
    font-family: "Space Mono", monospace;
    background-color: #141414;
    color: var(--primaryColor);
    overflow-x: hidden;
    font-size: 17px;
}

a {
    text-decoration: none;
    color: var(--primaryColor);
}
a:hover {
    color: chartreuse;
}

::-webkit-scrollbar {
    width: 4px;
    background-color: var(--backGround);
}

::-webkit-scrollbar-thumb {
    background: chartreuse;
    border-radius: 10px;
    height: 10px;
}

.body {
    height: 100vh;
    position: relative;
}

.mouse-effect {
    pointer-events: none;
    position: fixed;
    top: -720px;
    right: 0;
    bottom: 0;
    left: -860px;
    z-index: 1000;
    transition-property: all;
    transition-duration: 150ms;
    background: radial-gradient(
        600px at 871px 726.6px,
        rgba(29, 78, 216, 0.15),
        transparent 90%
    );
}

</style>
