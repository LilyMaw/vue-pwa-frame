export default {
  data() {
    return {
      title: "",
      description: "",
      showList: [],
      postList: [],
      valid: true,
      ttlRules: [
        value => !!value || "The title field is required."
      ],
      descriptionRules: [
        value => !!value || "The description field is required."
      ]
    };
  },

  beforeMount() {
    this.$axios
      .get("/post/list")
      .then((response) => {
        this.postList = response.data.post_list;
        this.showList = this.postList.filter(
          post => (post.id == this.$route.params.postId && 
          ("deleted_post_id" in post) == false));
        if (this.showList.length) {
          this.title = this.showList[0].title;
          this.description = this.showList[0].description;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    formSubmit() {
      if (this.$refs.form.validate()) {
        let uri = `/update/post/${this.$route.params.postId}`;
        let post = {
          title : this.title,
          description : this.description
        }
        this.$axios
        .put(uri, post)
        .then(() => {
          this.$router.push({ name: "post-list" });
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