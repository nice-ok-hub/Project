<template>
  <table>
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>住址</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody id="tbody">
      <tr v-for="(item, index) in list" :key="index">
        <td>{{ item.sNo }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.sex == 1 ? "男" : "女" }}</td>
        <td>{{ item.email }}</td>
        <td>{{ countAge(item.birth) }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.address }}</td>
        <td>
          <button class="btn edit" @click="edit(item)">编辑</button>
          <button class="btn del" >删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
// import api from "../../api";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  created() {
    this.getList({ page: 1, size: 5 });
  },
  methods: {
    countAge(birth) {
      return new Date().getFullYear() - birth;
    },
    ...mapActions(["getList","delStu"]),
    ...mapMutations(["setModal", "setEditStu"]),
    edit(item) {
      this.setModal(true);
      this.setEditStu(item);
    },
  },
  computed: {
    ...mapState({
      list: (state) => state.list,
    }),
  },
};
</script>