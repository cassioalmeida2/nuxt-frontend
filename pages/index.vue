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
				<highlight-collaborators />
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="8">
				<courses />
			</v-col>
			<v-col cols="4">
				<daily-feedback />
			</v-col>
		</v-row>
	</div>
</template>

<script>
</script>