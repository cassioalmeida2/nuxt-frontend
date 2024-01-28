<template>
    <v-btn rounded="lg" :text="title" :icon="icon" :size="size" :block="block" variant="outlined" class="base-button text-capitalize" :class="classes">
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

        block: {
            type: Boolean,
            default: false
        },

        icon: {
            type: Boolean,
            default: false,
        },

        colorType: {
            type: String,
            default: ''
        }
    })

    const classes = computed(() => {
        let classesButton = []

        if (props.colorType === 'strong') {
            classesButton.push('base-button--strong')
        }

        return classesButton
    })
</script>


<style lang="scss" scoped>
	.base-button {
        color: $textSub500;
        border: 1px solid $strokeSoft200;
        background-color: transparent;

        &--strong {
            background-color: $primaryBase;
            color: white;
            border: inherit;
        }
	}
</style>
