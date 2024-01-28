<template>
    <v-btn rounded="lg" :text="title" :icon="icon" :size="size" variant="outlined" class="base-button text-capitalize">
        <template v-slot:prepend>
            <slot name="prepend"/>
        </template>
        <template v-slot:append>
            <slot name="append"/>
        </template>
  </v-btn>
</template>


<script setup>
    import { ref, computed } from 'vue'

    const props = defineProps({
        title: {
            type: String,
            required: true,
            default: '',
        },

        size: {
            type: String,
        },

        icon: {
            type: Boolean,
            default: false,
        },

        color: {
            type: String,
            default: ''
        }
    })

    const classes = computed(() => {
        // let classesButton = []

        // if (props.size === 'medium') {
        //     classesButton.push('button__size--normal')
        // }

        // return classesButton
    })
</script>


<style lang="scss" scoped>
	.base-button {
        color: $textSub500;
        border: 1px solid $strokeSoft200;
        background-color: transparent;
	}
</style>
