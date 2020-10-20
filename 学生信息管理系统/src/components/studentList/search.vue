<template>
  <div class="search">
    <label for="search-word">关键字搜索</label>
    <input type="text" id="search-word" v-model="keyword" />
    <input type="button" id="search-submit" value="搜索" @click="search" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    search() {
      this.$store.dispatch('searchValue',this.keyword)
    },
  },
};
</script>