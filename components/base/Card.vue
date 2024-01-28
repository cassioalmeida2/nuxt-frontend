<template>
    <v-card class="mx-auto card" max-width="100%" color="white" elevation="0">
        <slot>
            <slot name="title"> 
                <v-card-title>
                    {{ title }}
                </v-card-title>
            </slot>
            <slot name="content">
                <v-card-item>{{ content }}</v-card-item>
            </slot>
            <slot v-if="action" name="action">
                <v-card-actions></v-card-actions>
            </slot>
        </slot>
    </v-card>
</template>

<script setup>
    import { ref } from 'vue'

    const example = ref()
</script>

<style lang='scss' scoped>
    .card {
        border: 1px solid $strokeSoft200;
        border-radius: 16px;
    }
</style>