<template>
  <div class="tableContent">
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in this.$store.state.visible" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "JsonPosts",
  created() {
    this.getPosts();
    this.updateVis();
    console.log(this.$store.state.visible);
  },
  methods: {
    getPosts() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.$store.state.posts = data;
          this.$store.commit(
            "updateVis",
            this.$store.state.posts.slice(
              this.$store.state.currPage * this.$store.state.pageSize,
              this.$store.state.currPage * this.$store.state.pageSize +
                this.$store.state.pageSize
            )
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updatePage(pageNumber) {
      this.$store.commit("updatePage", pageNumber);
      this.updateVis();
    },
    updateVis() {
      this.$store.commit(
        "updateVis",
        this.$store.state.posts.slice(
          this.$store.state.currPage * this.$store.state.pageSize,
          this.$store.state.currPage * this.$store.state.pageSize +
            this.$store.state.pageSize
        )
      );
      if (
        this.$store.state.visible.length == 0 &&
        this.$store.state.currPage > 0
      ) {
        this.updatePage(this.$store.state.currPage - 1);
      }
    },
  },
};
</script>

<style>
.tableContent {
  padding-top: 5px;
  font-size: 1.5vh;
}
table {
  table-layout: fixed;
  background-color: #e5beec;
}
thead {
  vertical-align: baseline;
}
td {
  text-align: left;
  padding: 0 2vw;
  border: 1px solid black;
  height: 50px;
}
tr {
  text-align: left;
  overflow-y: hidden;
}
</style>
