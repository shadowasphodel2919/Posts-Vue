<template>
  <div v-if="totalPages() > 0" class="pageWrapper">
    <span
      v-if="showPrevious()"
      class="pageBtn"
      @click="this.updatePage(this.$store.state.currPage - 1)"
      >{{ "<" }}</span
    >
    {{ this.$store.state.currPage + 1 }} of {{ totalPages() }}
    <span
      v-if="showNext()"
      class="pageBtn"
      @click="this.updatePage(this.$store.state.currPage + 1)"
      >></span
    >
  </div>
</template>
<script>
export default {
  name: "PaginationBtn",
  methods: {
    totalPages() {
      return Math.ceil(
        this.$store.state.posts.length / this.$store.state.pageSize
      );
    },
    showPrevious() {
      return this.$store.state.currPage == 0 ? false : true;
    },
    showNext() {
      return this.$store.state.currPage == this.totalPages() - 1 ? false : true;
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
<style scoped>
.pageWrapper {
  padding: 10px;
}
.pageBtn {
  cursor: pointer;
  border: 1px solid black;
  padding: 0 5px;
  background-color: #ede2f3;
}
.pageBtn::hover {
  background-color: #e5beec;
}
</style>
