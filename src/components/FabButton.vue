<template>
    <button class="fab" @click="$emit('click')">
        <slot>+</slot>
    </button>
</template>

<style scoped src="@/assets/styles/components/fab.css"></style>