export default {
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      dob: "",
      valid: true,
      showList: [],
      userList: [],
      nameRules: [value => !!value || "The name field is required."],
      telRules: [
        value => !!value || "The phone field is required.",
        value => /^\d+$/.test(value) || 'Phone number can\'t be alphabet',
        value => (value && value.length >= 5) || 'Phone number must have atleast 5 characters',
      ],
      addressRules: [value => !!value || "The address field is required."],
    }
  },

  /* This to retrieve old data by id*/
  beforeMount() {
    this.$axios
      .get("/user/list")
      .then((response) => {
        this.userList = response.data.user_list;
        this.showList = this.userList.filter(
          user => (user.id == this.$route.params.userId && 
          ("deleted_user_id" in user) == false));
        if (this.showList.length) {
          this.name = this.showList[0].name;
          this.phone = this.showList[0].phone;
          this.address = this.showList[0].address;
          this.dob = this.showList[0].dob;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    formSubmit() {
      if (this.$refs.form.validate()) {
        let updateUser = {
          name: this.name,
          phone: this.phone,
          address: this.address,
          dob: this.dob
        }
        let uri = `/update/user/${this.$route.params.userId}`;
        this.$axios.put(uri, updateUser).then(() => {
          this.$router.push({ name: "user-list" });
        })
        .catch((err) => {
          console.log(err);
        });
      } else {
        this.valid = false;
      }
    }
  }
};