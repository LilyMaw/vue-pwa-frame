<template>
  <v-card>
    <v-card-title>
      Edit User
    </v-card-title>
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="formSubmit">
        <div class="form-group">
          <p class="label">Name:</p>
           <v-text-field
            v-model="name"
            type="text"
            :rules="nameRules"
            hide-details="auto"
            outlined
            required
            counter="225"
          ></v-text-field>
        </div>
        <div class="form-group">
          <p class="label">Phone:</p>
          <v-text-field
            v-model="phone"
            type="text"
            :rules="telRules"
            hide-details="auto"
            outlined
            required
          ></v-text-field>
        </div>
        <div class="form-group">
          <p class="label">Address:</p>
          <v-text-field
            v-model="address"
            type="text"
            :rules="addressRules"
            hide-details="auto"
            outlined
            required
          ></v-text-field>
        </div>
        <div class="form-group">
          <p class="label">Date of Birth:</p>
          <input type="date" class="form-control" value="2000-01-01" min="1950-01-01" v-model="dob"/>
        </div>
        <div>
          <v-btn type="submit" :disabled="!valid" class="create-btn mr-4" color="primary">Update</v-btn>
          <v-btn :to="{ name: 'user-list' }" class="create-btn mr-4" color="primary">Cancel</v-btn>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>
<script src="../../services/pages/user/update-user.js">
</script>

<style scoped src="../../assets/css/pages/user/user.css">
</style>