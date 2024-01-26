<template>
    <div class="header d-flex justify-content-end">
        {{ header }}
    </div>
</template>

<script setup>
defineProps(['header'])
</script>

<style scoped>
.header {
    opacity: 0.15;
    height: 150px;
    font-size: 130px;
}

@media only screen and (max-width: 480px) {
    .header{
        font-size: 50px;
        height: 80px;
        margin-top: 50px;
    }
}

@media only screen and (min-width: 481px) and (max-width: 1023px) {
    .header{
        font-size: 70px;
        height: 100px;
        margin-top: 20px;
    }
}
</style>