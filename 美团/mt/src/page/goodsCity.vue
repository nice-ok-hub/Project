<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs></crumbs>
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <categroy></categroy>
        </el-row>
        <el-row>
          <list></list>
        </el-row>
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>
  </div>
</template>
<script>
import crumbs from "@/components/products/crumbs.vue";
import categroy from "@/components/products/categroy.vue";
import list from "@/components/products/list.vue";
export default {
  components: {
    crumbs,
    categroy,
    list,
  },
};
</script>
<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>