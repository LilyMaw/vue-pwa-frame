export default {
  data() {
    return {
      name: "",
      email: "",
      profile_path: "",
      phone: "",
      address: "",
      dob: "",
      userList: [],
      showList: [],
    };
  },

    /* This to retrieve data by id*/
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
          this.email = this.showList[0].email;
          this.profile_path = `http://localhost:5000/get/avator/${this.showList[0].id}`;
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

  },
};