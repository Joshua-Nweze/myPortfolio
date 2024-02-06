<template>
    <div class="header d-flex justify-content-end">
        <span class="word">{{ header }}</span>
    </div>
</template>

<script setup>
defineProps(["header"]);
</script>

<style scoped>
.header {
    height: 150px;
    background: var(--backGround);
}
.word{
    font-size: 70px;
    opacity: .7;
}

@media only screen and (max-width: 480px) {
    .header {
        height: 80px;
        padding: 70px 0;
    }

    .word {
        font-size: 50px;
        opacity: .7;
    }
}

@media only screen and (min-width: 481px) and (max-width: 1023px) {
    .header {
        height: 100px;
        margin-top: 30px;
    }
}
</style>
