<template>
  <v-card>
    <v-card-title>
    Confirm
    </v-card-title>
    <v-container>
      <v-form ref="form">
        <img id="output" class="ml-4" width="100" height="100">
        <div class="form-group">
          <p class="label">Name:</p>
          <p>{{ name }}</p>
        </div>
        <div class="form-group">
          <p class="label">Email:</p>
          <p>{{ email }}</p>
        </div>
        <div class="form-group">
          <p class="label">Password:</p>
          <p>{{ password }}</p>
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
         <v-btn @click="$router.back()" class="create-btn mr-4" color="error">Back</v-btn>
          <v-btn @click="submit" class="create-btn mr-4" color="primary">Confirm</v-btn>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>
<script src="../../services/pages/user/confirm-user.js">
</script>

<style scoped src="../../assets/css/pages/user/user.css">
</style>