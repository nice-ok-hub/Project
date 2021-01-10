<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"></i>
      {{ $store.state.position.name || "石家庄" }}
      <router-link class="changeCity" :to="{ name: 'changeCity' }">
        切换城市
      </router-link>
      [
      <a href="#" v-for="(item, index) in nearCity" :key="index">
        {{ item.name }}
      </a>

      ]
    </div>
    <div class="m-user" v-if="!$store.state.userName">
      <router-link class="login" :to="{ name: 'login' }">
        立即登陆
      </router-link>
      <router-link class="register" :to="{ name: 'register' }">
        注册
      </router-link>
    </div>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      nearCity: [],
    };
  },
  watch: {
    "$store.state.position": function () {
      this.nearCity = this.$store.state.position.nearCity;
    },
  },
  created() {
    api.getCurPosition().then((res) => {
      this.nearCity = res.data.data.nearCity;
    });
  },
};
</script>
