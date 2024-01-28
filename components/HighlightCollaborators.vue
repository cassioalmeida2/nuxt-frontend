<template>
    <card-dashboard icon="Star" title="Destaque colaboradores" buttonTitle="Enviar" iconAction="Share">
        <template v-slot:content>
            <div class="d-flex flex-column fill-height">
                <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
                        <v-tab value="1">Geral</v-tab>
                        <v-tab value="2">Comentários</v-tab>
                        <v-tab value="3">Prêmios</v-tab>
                </v-tabs>
                <v-window v-model="tab" class="fill-height">
                    <v-window-item value="1" class="fill-height">
                        <div class="d-flex flex-column align-center justify-space-around mt-1 fill-height">
                            <div>
                                <div class="label-large text-main900"> {{collaborator.name}} </div>
                                <div class="paragraph-small text-sub500"> {{collaborator.position}} </div>
                            </div>
                            <div style="width: 300px; height: 220px;">
                                <base-icon icon="MedalPicture" filled class="mr-2 hightlight-collaborators__medal"/> 
                                <base-icon :icon="collaborator.image" filled class="mr-2 hightlight-collaborators__icon" /> 
                            </div>
                            <div class="paragraph-small text-sub500"> {{collaborator.message}} </div>
                        </div>
                    </v-window-item>
                    <v-window-item value="2">
                        
                    </v-window-item>
                    <v-window-item value="3">
                        <v-card>
                            
                        </v-card>
                    </v-window-item>
                </v-window>
            </div>
        </template>
    </card-dashboard>
</template>

<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        collaborator: {
            type: Object,
            required: true,
            default: () => {},
        },
    })

    const tab = ref(null)
</script>

<style lang='scss' scoped>
.hightlight-collaborators {
    &__icon{
        width: 72px;
        height: 72px;
        position: absolute;
        top: 43.5%;
        left: 50%;
        transform: translateX(-50%);
    }

    &__medal {
        width: 300px;
        height: 220px;
    }
}

</style>