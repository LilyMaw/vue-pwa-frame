<template>
  <v-card>
    <v-card-title>
      User Profile
    </v-card-title>
    <v-container>
      <v-form ref="form">
        <img :src="profile_path" class="profile">
        <div class="form-group">
          <p class="label">Name:</p>
          <p>{{ name }}</p>
        </div>
        <div class="form-group">
          <p class="label">Phone:</p>
           <p>{{ phone }}</p>
        </div>
        <div class="form-group">
          <p class="label">Address:</p>
           <p>{{ address }}</p>
        </div>
        <div class="form-group">
          <p class="label">Date of Birth:</p>
           <p>{{ dob }}</p>
        </div>
        <div>
          <v-btn :to="{ name: 'user-list' }" class="create-btn mr-4" color="primary">Back</v-btn>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>
<script src="../../services/pages/user/user-detail.js">
</script>

<style scoped src="../../assets/css/pages/user/user.css">
</style>