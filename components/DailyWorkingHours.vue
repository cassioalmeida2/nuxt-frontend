<template>
    <card-dashboard icon="Clock" title="Horas diárias de trabalho" buttonTitle="Detalhes">
        <template v-slot:content>
            <div class="d-flex flex-column justify-between">
                <div class="label-medium text-sub500 pb-4">
                    <span class="text-main900">{{time.total.hour}}</span> horas <span class="text-main900">{{time.total.minutes}}</span> minutos no total ⏳
                </div>
                <v-row class="px-2">
                    <v-col v-for="(column, index) in sizeColByHour" :key="index" class="pa-1" :cols="column.col">
                        <div class="daily-working-hours" :class="column.classes"></div>
                    </v-col>
                </v-row>
                <div class="d-flex mt-8">
                    <div class="paragraph-x-small text-sub500 d-flex mr-2" v-for="(legend, index) in sizeColByHour" :key="index">
                        <div class="daily-working-hours__legend mr-2" :class="legend.classes"></div>
                        <div class="paragraph-x-small text-sub500" >{{legend.label}}</div>
                    </div>
                </div>
            </div>
        </template>
    </card-dashboard>
</template>

<script setup>
    import { ref, computed } from 'vue'

    const time = ref({
        total: { hour: 12, minutes: 27 },
        rest: { hour: 2, minutes: 57 },
        active: { hour: 8, minutes: 0 },
        extra_hour: { hour: 1, minutes: 30}
    })

    const hoursInMinute = (hours, minutes) => {
        const minutesPerHour = 60;
        var totalMinutes = hours * minutesPerHour + minutes;
        return parseInt(totalMinutes);
    }

    const sizeColByHour = computed(() => {
        const timeValue = time.value
        const totalHoursInMinutes = hoursInMinute(timeValue.total.hour, timeValue.total.minutes);
        const restHoursInMinutes = hoursInMinute(timeValue.rest.hour, timeValue.rest.minutes);
        const activeHoursInMinutes = hoursInMinute(timeValue.active.hour, timeValue.active.minutes);
        const extraHoursInMinutes = hoursInMinute(timeValue.extra_hour.hour, timeValue.extra_hour.minutes);
        const percent = 100

        const restHourPercentage = (restHoursInMinutes / totalHoursInMinutes) * percent;
        const activeHourPercentage = (activeHoursInMinutes / totalHoursInMinutes) * percent;
        const extraHourPercentage = (extraHoursInMinutes / totalHoursInMinutes) * percent;

        const columnsGrid = 12;
        const columnRestHour = Math.round((restHourPercentage / percent) * columnsGrid);
        const columnActiveHour = Math.round((activeHourPercentage / percent) * columnsGrid);
        const columnExtraHour = Math.round((extraHourPercentage / percent) * columnsGrid);

        return [
            {col: columnRestHour, classes: ['daily-working-hours__indicator'], label: 'Descanso'},
            {col:columnActiveHour, classes: ['daily-working-hours__indicator--active'], label: 'Ativo'},
            {col: columnExtraHour, classes: ['daily-working-hours__indicator--extra'], label: 'Hora extra'}
        ]
    })
</script>

<style lang='scss' scoped>
    .daily-working-hours {
        height: 10px;
        border-radius: 2px;

        &__indicator{ 
            background-color: $stateAway;

            &--active {
                background-color: $stateVerified;
            }

            &--extra {
                background-color: $stateFeature;
            }

        }

        &__legend {
            width: 16px;
            height: 16px;
            border-radius:16px;
        }
    }
</style>
