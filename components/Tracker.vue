<template>
    <card-dashboard icon="Stopwatch" title="Rastreador de tempo" buttonTitle="Histórico" iconAction="HistoryLine">
        <template v-slot:content>
            <div>
                <v-expansion-panels v-model="panel">
                    <v-expansion-panel elevation="0" class="tracker__timer">
                        <v-expansion-panel-title class="tracker__title">
                            <base-icon icon="MondayLogo" filled />
                            <span> Track App </span>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="d-flex align-center ">
                            <div class="d-flex align-center flex-column">
                                <span class="subheading-2x-small text-soft400 my-3">Aguardando</span>
                                <div>
                                    <h3 class="title-h3">{{ formatTime() }}</h3>
                                </div>
                                <base-button class="tracker__init-button" @click="changeStatusCounter" :title="counterRunning ? 'Parar' : 'Iniciar'">
                                    <template v-slot:prepend>
                                        <base-icon v-if="counterRunning" icon="Stop" class="tracker__init-icon" />
                                        <base-icon v-else icon="Play"  class="tracker__init-icon" />
                                    </template>
                                </base-button>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-list >
					<v-list-subheader class="subheading-x-small">TAREFAS ANTERIORES</v-list-subheader>
					<v-list-item class="pl-2 pa-0" v-for="(item, index) in items" :key="index" :value="item">
						<template v-slot:prepend>
							<div class="d-flex align-center pa-1">
								<base-icon :icon="item.icon" filled />
							</div>
						</template>
						<v-list-item-title class="d-flex flex-column">
							<span class="ml-2 ma-1 label-small">{{item.text}}</span>
							<span class="ml-2 label-small">{{item.time}}</span>
						</v-list-item-title>
                        <template v-slot:append>
                            <base-icon icon="Points" class="text-sub500"/>
                        </template>
					</v-list-item>
				</v-list>
            </div>
        </template>
    </card-dashboard>
</template>

<script setup>
    import { ref } from 'vue'

    const items = ref([
		{icon: 'LoomLogo', text: 'Loom Rebranding', time: '1:23:05' },
		{icon: 'EvernoteLogo', text: 'Evernote App Redesign', time: '1:23:05' }
	]);

    let panel = ref(0)
    let counterRunning = ref(false)
    let seconds = ref(0)
    let minutes = ref(0)
    let hours = ref(0)
    let timer = ref(null)

    let formatNumber = (number) => {
      return number < 10 ? `0${number}` : number;
    }

    let formatTime = () => {
        return `${formatNumber(hours.value)}:${formatNumber(minutes.value)}:${formatNumber(seconds.value)}`
    }

    let changeStatusCounter = () => {
        counterRunning.value = !counterRunning.value;

        if (counterRunning.value) {
            timer.value = setInterval(() => {
                seconds.value++
                if (seconds.value === 60) {
                    seconds.value = 0
                    minutes.value++
                }
                if (minutes.value === 60) {
                    minutes.value = 0
                    hours.value++
                }
            }, 1000);
        } else {
            clearInterval(timer.value);
        }
    }

</script>

<style lang='scss' scoped>
.tracker {
    &__timer {
        border: 1px solid $strokeSoft200;
        border-radius: 16px;
    }

    &__title {
        min-height: 20px!important;
        height: 20px!important;
    }

    &__init-button {
        color: $primaryBase;
        border: none;
        background-color: transparent;
    }

    &__init-icon {
        width: 16px;
        height: 16px;
        fill: $primaryBase;
    }
}
</style>