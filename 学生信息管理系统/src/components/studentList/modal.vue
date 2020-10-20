<template>
  <div class="dialog">
    <div class="mask" @click="setModal(false)"></div>
    <div class="dialog-content">
      <h2>编辑信息</h2>
      <form id="edit-student-form">
        <div>
          <label for="name">姓名</label
          ><input
            type="text"
            name="name"
            id="name"
            :value="editStu.name"
            @input="changeValue('name', $event.target.value)"
          />
        </div>
        <div>
          <label for="">性别</label>
          <input
            type="radio"
            id="male"
            name="sex"
            value="0"
            :checked="editStu.sex == 0"
            @change="changeValue('sex', 0)"
          />
          <label for="male" class="radio-label">男</label>
          <input
            type="radio"
            id="female"
            name="sex"
            value="1"
            :checked="editStu.sex == 1"
            @change="changeValue('sex', 1)"
          />
          <label for="female" class="radio-label">女</label>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input
            type="text"
            name="sNo"
            id="sNo"
            :value="editStu.sNo"
            @input="changeValue('sNo', $event.target.value)"
          />
        </div>
        <div>
          <label for="email">邮箱</label
          ><input
            type="text"
            name="email"
            id="email"
            :value="editStu.email"
            @input="changeValue('email', $event.target.value)"
          />
        </div>
        <div>
          <label for="birth">出生年</label
          ><input
            type="text"
            name="birth"
            id="birth"
            :value="editStu.birth"
            @input="changeValue('birth', $event.target.value)"
          />
        </div>
        <div>
          <label for="phone">手机号</label
          ><input
            type="text"
            name="phone"
            id="phone"
            :value="editStu.phone"
            @input="changeValue('phone', $event.target.value)"
          />
        </div>
        <div>
          <label for="address">住址</label
          ><input
            type="text"
            name="address"
            id="address"
            :value="editStu.address"
            @input="changeValue('address', $event.target.value)"
          />
        </div>
        <div class="button">
          <label for="">&nbsp;</label>
          <input
            type="button"
            value="提交"
            class="btn"
            id="edit-student-btn"
            @click="commit"
          />
          <input type="reset" value="重置" class="btn" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      stu: {},
    };
  },
  methods: {
    ...mapMutations(["setModal"]),
    ...mapActions(["updateStu"]),
    commit() {
      this.updateStu(Object.assign({}, this.editStu, this.stu)).then(data=>{
        this.$toast(data)
      });
    },
    changeValue(key, value) {
      this.stu[key] = value;
    },
  },
  computed: {
    ...mapState(["editStu"]),
  },
};
</script>