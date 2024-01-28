<template>
	<div class="pa-6 fill-height">
		<v-row class="d-flex full-height">
			<v-col>
				<tracker />	
			</v-col>
			<v-col>
				<div class="d-flex flex-column full-height">
					<div class="flex-grow-1 mb-6">
						<daily-working-hours />
					</div>
					<div class="flex-grow-1">
						<progress-courses />
					</div>
				</div>
			</v-col>
			<v-col>
				<highlight-collaborators :collaborator="collaborator"/>
			</v-col>
		</v-row>

		<v-row>
			<v-col sm="12" md="12" lg="8" xl="8" class="courses-section">
				<courses />
			</v-col>
			<v-col sm="12" md="12" lg="4" xl="4">
				<daily-feedback />
			</v-col>
		</v-row>
	</div>
</template>

<script setup>
	const collaborator = {
		name: 'Matthew Johnson',
        image: 'Avatar5',
        position: 'Engenheiro de Software',
        message: 'Funcionário de melhor desempenho de dezembro!'
	}
</script>

<style lang="scss" scoped>
@media (max-width: 700px) {
	.courses-section {
		display: none;
	}
}
</style>