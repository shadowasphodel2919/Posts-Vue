<template>
  <div class="home">
    <div class="homeContent">
      <div class="title">
        <h2>Vue JS Application</h2>
      </div>
      <PostForm />
      <JsonPosts />
      <PaginationBtn />
    </div>
  </div>
</template>

<script>
import PaginationBtn from "@/components/Pagination.vue";
import JsonPosts from "../components/JsonPosts.vue";
import PostForm from "../components/PostForm.vue";
export default {
  name: "HomeView",
  components: {
    JsonPosts,
    PostForm,
    PaginationBtn,
  },
};
</script>
<style scoped>
.home {
  height: 100%;
  width: 70vw;
  padding: 2%;
  color: black;
  font-family: "Nunito", sans-serif;
  background-color: #ffffff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.homeContent {
  width: 90%;
  margin: auto;
}

.title {
  margin: auto;
  padding: 10px 10px;
}
</style>
