import { mapGetters } from "vuex";
export default {
  data() {
    return {
      postInfo: null,
      dialogTitle: "",
      dialog: false,
      isDeleteDialog: false,
      headerList: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Phone",
          value: "phone",
        },
        {
          text: "Address",
          value: "address",
        },
        {
          text: "Operation",
          value: "operation",
        }
      ],
      userList: [],
      showList: [],
      search: "",
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "userId"]),
    headers() {
      if (!this.isLoggedIn) {
        return this.headerList.slice(0, this.headerList.length - 1);
      } else {
        return this.headerList;
      }
    },
  },
  beforeMount() {
    this.$axios
      .get("/user/list")
      .then((response) => {
        this.userList = response.data.user_list;
        this.showList = this.userList.filter(user => !user.deleted_user_id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteUser(userId) {
      if(confirm('are you sure?'))
      this.$axios.delete(`/delete/user/${userId}`).then(() => {
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    },
    searchUser(search) {
      this.showList =  this.userList.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      })
    },
  },
};