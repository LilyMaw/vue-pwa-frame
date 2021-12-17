<template>
  <v-card>
    <v-card-title>
      New User
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
          <p class="label">Email:</p>
          <v-text-field
            v-model="email"
            type="email"
            :rules="emailRules"
            hide-details="auto"
            outlined
            required
          ></v-text-field>
        </div>
        <div class="form-group">
          <p class="label">Password:</p>
          <v-text-field
            v-model="password"
            type="password"
            :rules="pwdRules"
            hide-details="auto"
            outlined
            required
          ></v-text-field>
        </div>
        <div class="form-group">
          <p class="label">Profile Picture:</p>
          <v-file-input
            v-model="profile_path"
            :rules="picRules"
            outlined
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick a photo"
            prepend-icon="mdi-camera"
            required
            @change="uploadImage(profile_path)"
          ></v-file-input>
          <img id="output" class="ml-4" width="100" height="100">
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
            style="text-transform:uppercase;"
          ></v-text-field>
        </div>
        <div class="form-group">
          <p class="label">Date of Birth:</p>
          <input type="date" class="form-control" min="1950-01-01" v-model="dob"/>
        </div>
        <div>
          <v-btn @click="back" class="create-btn mr-4" color="error">Cancel</v-btn>
          <v-btn type="submit" :disabled="!valid" class="create-btn mr-4" color="primary">Continue</v-btn>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>
<script src="../../services/pages/user/create-user.js">
</script>

<style scoped src="../../assets/css/pages/user/user.css">
</style>