<template>
  <v-card>
    <v-card-title>
      Post Detail
    </v-card-title>
    <v-container>
      <v-form ref="form">
        <h2 class="mb-4">{{ title }}</h2>
        <p class="mb-4"> {{ description }}</p>
        <div>
          <v-btn :to="{ name: 'post-list' }" class="create-btn mr-4" color="primary">Back</v-btn>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>
<script src="../../services/post/post-detail.js">
</script>

<style scoped src="../../assets/css/pages/post/create-update.css">
</style>

