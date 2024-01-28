<template>
    <card-dashboard icon="Book" title="Cursos - Progresso" buttonTitle="Ver todos">
        <template v-slot:content>
            <base-divisor class="mb-5" />
            <v-row>
                <v-col cols="4">
                    <v-progress-circular :size="100" :width="8" :model-value="value" class="progress-courses__indicator">
                        <span class="label-small text-main900">{{ value }}%</span>
                    </v-progress-circular>
                </v-col>
                <v-col cols="8">
                    <div class="label-small text-main900 mb-2">Diversidade da equipe</div>
                    <div class="paragraph-x-small text-sub500 mb-2">Projetado para promover a inclusividade e perspectivas diversas.</div>
                    <a href="#" class="text-primaryBase link-default">Retomar curso</a>
                </v-col>
            </v-row>
        </template>
    </card-dashboard>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref(25)
</script>

<style lang='scss' scoped>
.progress-courses {
    &__indicator {
        color: $primaryBase;
    }
}
</style>