<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <!-- <dd>全部</dd> -->
      <dd v-for="item in classList" :key="item.type">
        <m-select :name="item.title" :list="item.subList"></m-select>
      </dd>
    </dl>

    <dl class="classic">
      <dt>区域</dt>
      <!-- <dd>全部</dd> -->
      <dd v-for="item in areaList" :key="item.type">
        <m-select :name="item.title" :list="item.subList"></m-select>
      </dd>
    </dl>
  </div>
</template>
<script>
import mSelect from "./select.vue";
export default {
  components: {
    mSelect,
  },
  data() {
    return {
      classList: [
        {
          title: "美食",

          type: "food",

          subList: [
            {
              name: "日本菜",

              id: "Japan",
            },
          ],
        },
        {
          title: "酒店住宿",

          type: "hotal",

          subList: [
            {
              name: "温泉酒店",

              id: "hot_spring",
            },
          ],
        },
      ],
      areaList: [
        {
          title: "美食",

          type: "food",

          subList: [
            {
              name: "日本菜",

              id: "Japan",
            },
          ],
        },
        {
          title: "酒店住宿",

          type: "hotal",

          subList: [
            {
              name: "温泉酒店",

              id: "hot_spring",
            },
          ],
        },
      ],
    };
  },
};
</script>
