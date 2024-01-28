<template>
	<v-app>
		<v-layout class="rounded rounded-md">
			<v-navigation-drawer class="default__fixed-area">
				<template v-slot:prepend>
					<v-list>
						<v-list-item>
							<template v-slot:title>
								<span class="paragraph-x-small text-main900">Jurisoft</span>
							</template>
							<template v-slot:subtitle>
								<span class="paragraph-x-small text-sub500">Marketing Jurídico</span>
							</template>
							<template v-slot:prepend>
									<SvgoJurisoft filled class="text-xl default__image mr-3 mt-2" />
								</template>
								<template v-slot:append>
									<v-btn size="small" variant="text" icon>
										<SvgoArrowDown class="pa-0 ma-0" />
									</v-btn>
								</template>
						</v-list-item>
					</v-list>
				</template>
				<base-divisor class="mx-4" />
				<v-list density="compact">
					<v-list-subheader class="subheading-x-small">MAIN</v-list-subheader>

					<v-list-item v-for="(item, i) in items" :key="i" :value="item">
						<template v-slot:prepend>
							<div class="d-flex align-center pa-1">
								<component :is="`Svgo${item.icon}`" filled class="pa-0 ma-0"/>
							</div>
						</template>
						<v-list-item-title>
							<span class="ml-2 label-small">{{item.text}}</span>
						</v-list-item-title>
					</v-list-item>
				</v-list>
				<v-list density="compact">
					<v-list-subheader class="subheading-x-small">FAVS</v-list-subheader>

					<v-list-item v-for="(fav, i) in favs" :key="i" :value="fav">
						<template v-slot:prepend>
							<div class="d-flex align-center pa-1">
								<base-icon :icon="fav.icon" filled />
							</div>
						</template>
						<v-list-item-title>
							<span class="ml-2 label-small">{{fav.text}}</span>
						</v-list-item-title>
						<template v-slot:append>
							<div class="d-flex align-center pa-1">
								<span class="ml-2 label-small">{{fav.info}}</span>
							</div>
						</template>
					</v-list-item>
				</v-list>
				<template v-slot:append>
					<v-list density="compact">
						<v-list-item v-for="(configuration, i) in configurations" :key="i" :value="configuration">
							<template v-slot:prepend>
								<div class="d-flex align-center pa-1">
									<component :is="`Svgo${configuration.icon}`" filled class="pa-0 ma-0"/>
								</div>
							</template>
							<v-list-item-title>
								<span class="ml-2 label-small">{{configuration.text}}</span>
							</v-list-item-title>
						</v-list-item>
					</v-list>
					<div class="pa-2 d-flex align-center">
						<base-icon icon="Avatar1" filled class="default__avatar-header" />
						<div>
							<div class="d-flex align-center">
								<h2 class="label-large text-main900">{{user.name}}</h2>
								<base-icon icon="Verified" filled />
							</div>
							<h3 class="paragraph-small text-sub500">{{user.email}}</h3>
						</div>
						<base-icon icon="ArrowRight" filled class="default__arrow-icon" />
					</div>
				</template>
			</v-navigation-drawer>

			<v-app-bar class="default__fixed-area pl-7 pr-4 pt-2" elevation="0">
				<div class="d-flex">
					<div>
						<base-icon icon="Avatar1" filled class="default__avatar-header" />
					</div>
					<div class="default__info-profile">
						<h2 class="label-large text-main900">{{user.name}}</h2>
						<h3 class="paragraph-small text-sub500">Bem-vinda de volta 👋🏻</h3>
					</div>
				</div>
				<template v-slot:append>
					<base-icon icon="Search" filled class="default__icon" />
					<base-icon icon="Notification" filled class="default__icon" />
					<div class="default__desktop-action">
						<base-button title="Calendário" class="mr-4">
							<template v-slot:prepend>
								<base-icon icon="CalendarCheck" class="card-dashboard__icon" />
							</template>
						</base-button>
						<base-button title="Nova solicitação" colorType="strong">
							<template v-slot:prepend>
								<base-icon icon="Add" class="card-dashboard__icon" />
							</template>
						</base-button>
					</div>
					<div class="default__mobile-action ml-5">
						<base-icon icon="CalendarCheck" filled class="card-dashboard__icon" />
						<base-icon icon="Add" class="card-dashboard__icon ml-2" />
					</div>
				</template>
			</v-app-bar>

			<v-main class="d-flex align-center justify-center" style="min-height: 300px;">
				<slot />
			</v-main>
		</v-layout>
	</v-app>
</template>

<script setup>
	import { ref } from 'vue'

	const user = { name:'Sophia Williams', email : 'sophia@jurisoft.com'}

	const items = ref([
		{icon: 'Grid', text: 'Dashboard' },
		{icon: 'Calendar', text: 'Calendário' },
		{icon: 'Clock', text: 'Descanso' },
		{icon: 'Folder', text: 'Projetos' },
		{icon: 'People', text: 'Times' },
		{icon: 'Filter', text: 'Integrações' },
		{icon: 'Star', text: 'Benefícios' },
		{icon: 'Document', text: 'Documentos' }
	]);

	const favs = ref([
		{icon: 'LoomPoint', text: 'Loom Mobile App', info: '⌘ 1'},
		{icon: 'MondayPoint', text: 'Monday Redesign', info: '⌘ 2'},
		{icon: 'UdemyPoint', text: 'Udemy Courses', info: '⌘ 3'},
	]);

	const configurations = ref([
		{icon: 'Configuration', text: 'Configurações'},
		{icon: 'Headphone', text: 'Suporte'},
	]);

</script>

<style lang="scss">
.default {
	&__icon {
		width: 40px!important;
		height: 40px!important;
	}

	&__image {
		width: 40px;
		height: 40px;
	}

	&__fixed-area{
		position: fixed!important;
	}

	&__avatar-header {
		width: 48px!important;
		height: 48px!important;
	}

	&__arrow-icon {
		width: 12px!important;
		height: 12px!important;
	}

	&__mobile-action {
		display:none;
		@media (max-width: 700px) {
			display: flex;
		}
	}

	&__desktop-action {
		@media (max-width: 700px) {
			display: none;
		}
	}

	&__info-profile {
		@media (max-width: 700px) {
			display: none;
		}
	}
}
</style>
