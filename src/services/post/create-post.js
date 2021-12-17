export default {
  component: {
    name: "Post"
  },
  data() {
    return {
      title: "",
      description: "",
      valid: true,
      ttlRules: [
        value => !!value || "The title field is required."
      ],
      descriptionRules: [
        value => !!value || "The description field is required."
      ]
    }
  },
  methods: {
    formSubmit() {
      if (this.$refs.form.validate()) {
        let post = {
          title : this.title,
          description : this.description
        }
        if(confirm('Do you want to create new post?'))
        this.$axios.post("/create/post", post).then(() => {
          this.$router.push({ name: "post-list" });
          alert("New post is created successfully!")
        })
        .catch((err) => {
          console.log(err);
        });
      } else {
        this.valid = false;
      }
    }  
  }
}