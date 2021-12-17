export default {
  name: "CreateUser",
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
    }
  },

  beforeMount() {
    this.name = this.$store.state.createdUser.name;
    this.email = this.$store.state.createdUser.email;
    this.password = this.$store.state.createdUser.password;
    this.phone = this.$store.state.createdUser.phone;
    this.address = this.$store.state.createdUser.address;
    this.dob = this.$store.state.createdUser.dob;
    this.profile_path = this.$store.state.createdUser.profile_path;
  },

  mounted() {
    this.uploadImage(this.profile_path)
  },
  
  methods: {
    uploadImage(profile_path) {
      var dataURL = URL.createObjectURL(profile_path); 
      var output = document.getElementById("output");
      output.src = dataURL
    },
    
    submit() {
      this.$axios
      .post("/save/profile_picture",  this.profile_path)
      .then((response) => {
        let user = {
          name : this.name,
          email : this.email,
          password : this.password,
          profile_path : response.data.profile_path,
          phone : this.phone,
          address : this.address,
          dob : this.dob,
        }

        this.$axios.post("/create/user", user).then(() => {
          this.$store.commit("setCreatedUserData", null);
          this.$router.push({ name: "user-list" });
        })
        .catch((err) => {
          console.log(err);
        });
      },
        (error) => {
          alert(error);
        }
      ); 

      alert("You have registered new user successfully!")
    },
  },
};