<template>
  <v-card>
    <v-card-title>
      Create Post
    </v-card-title>
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="formSubmit">
        <div class="form-group">
          <p class="label">Tilte:</p>
          <v-text-field
            v-model="title"
            type="text"
            :rules="ttlRules"
            hide-details="auto"
            outlined
            required
          ></v-text-field>
        </div>
        <div class="form-group">
          <p class="label">Description:</p>
          <v-textarea
            v-model="description"
            :rules="descriptionRules"
            name="input-7-4"
            clearable
            outlined
          ></v-textarea>
        </div>
        <div>
          <v-btn :to="{ name: 'post-list' }" class="create-btn mr-4" color="primary">Cancel</v-btn>
          <v-btn type="submit" :disabled="!valid" class="create-btn mr-4" color="primary">Create</v-btn>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>
<script src="../../services/post/create-post.js">
</script>

<style scoped src="../../assets/css/pages/post/create-update.css">
</style>