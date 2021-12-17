export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      dob: "",
      profile_path: [],
      valid: true,

      nameRules: [value => !!value || "The name field is required."],
      emailRules: [
        value => !!value || "The email field is required.",
        value => /.+@.+\..+/.test(value) || "E-mail must be valid."
      ],
      pwdRules: [
        value => !!value || "The password field is required.",
        value => (value && value.length >= 8) || "Password must have alteast 8 characters",
      ],
      picRules: [
        value => !!value || "Choose a photo",
        value => value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
      telRules: [
        value => !!value || "The phone field is required.",
        value => /^\d+$/.test(value) || 'Phone number can\'t be alphabet',
        value => (value && value.length >= 5) || 'Phone number must have atleast 5 characters',
      ],
      addressRules: [value => !!value || "The address field is required."],
    }
  },
  beforeMount() {
    if(this.$store.state.createdUser){
      this.name = this.$store.state.createdUser.name; 
      this.email = this.$store.state.createdUser.email;
      this.password = this.$store.state.createdUser.password;
      this.phone = this.$store.state.createdUser.phone;
      this.address = this.$store.state.createdUser.address;
      this.dob = this.$store.state.createdUser.dob;
      this.profile_path = this.$store.state.createdUser.profile_path;
    }
  },
  methods: {
    uploadImage(profile_path) {
      var dataURL = URL.createObjectURL(profile_path); 
      var output = document.getElementById("output");
      output.src = dataURL
    },
    
    formSubmit() {
      if (this.$refs.form.validate()) {
        var user = {
          name : this.name,
          email: this.email,
          password: this.password,
          phone: this.phone,
          address: this.address,
          dob: this.dob,
          profile_path: this.profile_path
        };
        this.$store.commit('setCreatedUserData', user);
        this.$router.push({ name: "confirm-user" });
      } else {
        this.valid = false;
      }
    },
    back() {
      this.$store.commit('setCreatedUserData', null);
      this.$router.push({ name: "user-list" });
    }
  }
}