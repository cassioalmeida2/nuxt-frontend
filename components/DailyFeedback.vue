<template>
    <card-dashboard icon="Message" title="Feedback diário">
        <template v-slot:content>
            <div class="d-flex flex-column justify-space-between fill-height">
                <base-divisor class="mb-5" />
                <div class="d-flex align-center justify-center">
                    <div class="daily-feedback__status">
                    </div>
                    <base-icon icon="Smile" filled  class="daily-feedback__current-status"/>
                </div>
                <div class="d-flex flex-column align-center">
                    <span class="label-medium text-main900 mb-2">Como você classificaria seu humor hoje?</span>
                    <span class="paragraph-x-small text-sub500">Compartilhe seu humor para nos ajudar a entender.</span>
                </div>
                <div>
                    <div class="d-flex">
                        <div class="daily-feedback__emoticon-list daily-feedback__emoticon-list--side-left flex-grow-1">
                            <base-icon icon="PensiveEmoticon"  class="emoticon daily-feedback__animate" filled />
                        </div>
                        <div class="daily-feedback__emoticon-list daily-feedback__emoticon-list flex-grow-1">
                            <base-icon icon="ConfusedEmoticon" class="emoticon daily-feedback__animate" filled />
                        </div>
                        <div class="daily-feedback__emoticon-list daily-feedback__emoticon-list flex-grow-1">
                            <base-icon icon="SmileEmoticon" class="daily-feedback__animate" filled />
                        </div>
                        <div class="daily-feedback__emoticon-list daily-feedback__emoticon-list--side-right flex-grow-1">
                            <base-icon icon="HappyEmoticon" class="daily-feedback__animate" filled />
                        </div>
                    </div>
                    <v-textarea 
                        hide-details="auto"
                        auto-grow 
                        variant="outlined" 
                        rows="3" 
                        row-height="25" 
                        shaped 
                        placeholder="Adicionar comentário" 
                        color="grey-lighten-2" 
                        class="daily-feedback__message"
                        base-color="white"
                        rounded="10"
                    >
                    </v-textarea>
                </div>
                <div>
                    <base-button title="Enviar" block class="mr-4">
					</base-button>
                </div>
            </div>
        </template>
    </card-dashboard>
</template>

<script setup>
    import { ref } from 'vue'

    const example = ref()
</script>

<style lang='scss' scoped>
.daily-feedback {
    &__emoticon-list {
        border: 1px solid $strokeSoft200;
        text-align: center;
        cursor: pointer;
        padding: 5px;

        &--side-left {
            border-top-left-radius: 10px;
        }

        &--side-right {
            border-top-right-radius: 10px;
        }

        &:hover .daily-feedback__animate{
            transform: rotate(360deg);
            transition: 200ms;
        }
    }

    &__status {
        background-color: $primaryBase;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        opacity: 0.4;
    }

    &__current-status {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    &__message {
        border: 1px solid $strokeSoft200!important;
        border-radius: 0px 0px 10px 10px;
        &:hover{
            border: 1px solid $strokeSoft200!important;
        }
    }


}
</style>