<template>
    <card-dashboard icon="Book" title="Cursos" buttonTitle="Ver todos" class="courses">
        <template v-slot:search>
            <v-responsive class="mx-auto" max-width="344">
                <v-text-field
                    class="courses__search"
                    density="compact"
                    label="Pesquisar cursos..."
                    prepend-inner-icon="mdi-magnify"
                    single-line
                    hide-details
                    @click:append-inner="onClick"
                ></v-text-field>
            </v-responsive>
        </template>
        <template v-slot:content>
            <v-row class="courses__table-header mt-3">
                <v-col v-for="(header, index) in headers" :key="index" :cols="header.column">
                    <span>{{header.title}}</span>
                </v-col>
            </v-row>
            <v-row v-for="(item, indexItem) in items" :key="indexItem" class="courses__table-content mt-3">
                <v-col cols="4">
                    <div class="d-flex align-center">
                        <component :is="`Svgo${item.image}`" filled class="mr-2 courses__image" />
                        <v-col>
                            <div>
                                <span class="paragraph-small text-main900">{{item.teacher}}</span>
                            </div>
                            <div class="text-ellipsis">
                                <span class="paragraph-x-small text-sub500" >{{item.position}}</span>
                            </div>
                        </v-col>
                    </div>
                </v-col>
                <v-col class="d-flex align-center">
                    
                     <v-col>
                        <div>
                            <span class="paragraph-small text-main900">{{item.course}}</span>
                        </div>
                        <div>
                            <span class="paragraph-x-small text-sub500" >{{item.range_date}}</span>
                        </div>
                    </v-col>
                </v-col>
                <v-row class="d-flex align-center">
                        <v-col cols="8">
                            <v-progress-linear :model-value="item.progress" height="6" rounded class="courses__progress-indicator"></v-progress-linear>
                        </v-col>
                        <v-col cols="4" class="paragraph-x-small">{{item.progress}} %</v-col>
                </v-row>
                <v-col class="d-flex align-center">
                    <v-chip class="ma-2 courses__status-indicator" variant="outlined" label>
                        <component :is="`Svgo${getStatus(item.status).icon}`" filled class="mr-2" />
                        {{getStatus(item.status).label}}
                    </v-chip>
                </v-col>
            </v-row>
        </template>
    </card-dashboard>
</template>

<script setup>
    import { ref } from 'vue'

    const headers = ref(
        [
            { title: 'Professor', align: 'start', key: 'teacher', column: '4' },
            { title: 'Nome do curso', align: 'center', key: 'course', column: '3' },
            { title: 'Progresso', align: 'center', key: 'progress', column: '3' },
            { title: 'Status', align: 'center', key: 'status', column: '2' },
        ]
    )

    const items = ref(
        [
            {
                image: 'Avatar2',
                teacher: 'Nuray Aksoy',
                position: 'Gerente de produto',
                course: 'Time Management',
                range_date: 'Ago 21 - Set 04',
                progress: '30',
                status: 'in_progress',
            },
            {
                image: 'Avatar3',
                teacher: 'Arthur Taylor',
                position: 'CEO',
                course: 'Time Management',
                range_date: 'Ago 21 - Set 04',
                progress: '70',
                status: 'in_progress',
            },
            {
                image: 'Avatar4',
                teacher: 'Lena Müller',
                position: 'Gerente de marketing',
                course: 'Time Management',
                range_date: 'Ago 21 - Set 04',
                progress: '100',
                status: 'completed',
            },
            {
                image: 'Avatar6',
                teacher: 'Wei Chen',
                position: 'Gerente de operação',
                course: 'Time Management',
                range_date: 'Ago 21 - Set 04',
                progress: '100',
                status: 'completed',
            },
        ]
    )

    const getStatus = (status) => {
        return status === 'in_progress' ? {label:'Em endamento', icon: 'ClockWait'} : {label:'Concluído', icon: 'CheckCircle'}
    }
</script>

<style lang='scss'>
.courses {
    &__table-header{
        background: $weak100;
    }

    &__image {
		width: 50px!important;
		height: 50px!important;
	}

    &__status-indicator {
        border: 1px solid $strokeSoft200!important;
        background-color: transparent!important;
	}

    &__progress-indicator {
        color: $primaryBase;
        background-color: $strokeSoft200;
    }

    &__search {
        border: 1px solid $strokeSoft200;
        border-radius: 16px;
    }

    .v-field--variant-filled .v-field__overlay {
        background-color: transparent;
    }

    .v-field--variant-filled .v-field__outline::before, .v-field--variant-underlined .v-field__outline::before {
        border-style: inherit;
    }
    
} 
</style>