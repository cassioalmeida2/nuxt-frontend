<template>
    <component :is="`Svgo${icon}`" :filled="filled" class="mr-2 base-icon"/>
</template>

<script setup>
    const props = defineProps({
        icon: {
            type: String,
            required: true,
        },

        icon: {
            type: Boolean,
            default: false,
            required: true,
        }
    })

</script>

<style lang="scss" scoped>
    .base-icon {  
        width: 24px;
        height: 24px;
    }
</style>
