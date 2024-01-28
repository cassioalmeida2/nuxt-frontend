<template>
    <base-card class="pa-5 card-dashboard">
        <template v-slot:title>
            <slot name="title">
                <div class="d-flex justify-space-between flex-grow-0">
                    <div class="d-flex align-center">
                        <component :is="`Svgo${icon}`" class="mr-2 card-dashboard__icon"/>
                        <div class="label-medium">{{title}}</div>
                    </div>
                    <slot name="search">
                    </slot>
                    <div v-if="buttonTitle">
                        <base-button :title="buttonTitle">
                            <template v-if="iconAction" v-slot:prepend>
                                <component :is="`Svgo${iconAction}`" class="card-dashboard__icon"/>
                            </template>
                        </base-button>
                    </div>
                </div>
            </slot>
        </template>
        <template v-slot:content>
            <div class="mt-4 flex-grow-1">
                <slot name="content">
                    <div>Teste 2</div>
                </slot>
            </div>
        </template>
        <template v-if="action" v-slot:action>
            <slot name="action">
                <div>Teste 3</div>
            </slot>
        </template>
    </base-card>
</template>

<script setup>
    import { ref } from 'vue'

    const example = ref()
    const props = defineProps({
        title: {
            type: String,
            required: true,
            default: '',
        },
        icon: {
            type: String,
            required: true,
            default: 'Book',
        },
        iconAction: {
            type: String,
            required: true,
            default: '',
        },
        buttonTitle: {
            type: String,
            required: true,
            default: '',
        },
    })
</script>

<style lang='scss' scoped>
.card-dashboard {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__icon{
        width: 24px;
        height: 24px;
    }
}

.teste {
    color: purple;
}
</style>