<template>
  <form @submit="onSubmit">
    <input v-model="title" name="title" type="text" placeholder="Enter title" />
    <textarea
      v-model="body"
      name="body"
      placeholder="Enter body"
      class="form-body"
    />
    <button type="submit">Submit</button>
  </form>
</template>
<script>
export default {
  name: "PostForm",
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$store.commit("addPost", {
        id: this.$store.state.count,
        title: this.title,
        body: this.body,
      });
      if (this.$store.state.visible.length < this.$store.state.pageSize) {
        this.$store.commit("addVis", {
          id: this.$store.state.count,
          title: this.title,
          body: this.body,
        });
      }
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          body: this.body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log("Fake server response" + json));
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  background-color: #917fb3;
  padding: 10px 5px;
}
input {
  height: 5vh;
}
textarea {
  height: 15vh;
  width: 30vw;
  padding-top: 0;
  padding-left: 0;
}

form button {
  width: 20%;
  height: 5vh;
}
</style>
