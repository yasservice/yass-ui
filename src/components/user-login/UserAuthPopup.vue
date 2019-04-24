<template>
  <el-dialog
    class="auth-dialog"
    title="Tips"
    :visible.sync="isModalVisible"
    @close="close('userAuth')"
    width="40%"
    center
  >
    <div slot="title">
      <el-switch 
        v-model="showSignupForm" 
        active-text="Log in" 
        inactive-text="Sign up"
        @change="resetForm('authForm')">
      </el-switch>
    </div>

    <el-form
      v-if="showSignupForm"
      :model="authForm"
      status-icon
      :rules="authRuls"
      ref="authForm"
      class="auth-form regestrations-form"
    >
      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="authForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Confirm" prop="checkPass">
        <el-input type="password" v-model="authForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input v-model.number="authForm.age"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="Email">
        <el-input v-model="authForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('authForm')">Submit</el-button>
        <el-button @click="resetForm('authForm')">Reset</el-button>
      </el-form-item>
    </el-form>

    <el-form
      v-else
      :model="authForm"
      status-icon
      :rules="authRuls"
      ref="authForm"
      class="auth-form authorization-form"
    >
      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="authForm.pass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item prop="email" label="Email">
        <el-input v-model="authForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('authForm')">Submit</el-button>
        <el-button @click="resetForm('authForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: "UserAuthPopup",

  data() {
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Пожалуйста введите возраст"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("Поля должно состоять только из цыфр"));
        } else {
          if (value < 6) {
            callback(new Error("Возраст должен быть больше 6"));
          } else {
            callback();
          }
        }
      }, 1000);
    };

    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Пожалуйста введите пароль"));
      } else {
        if (this.authForm.checkPass !== "") {
          this.$refs.authForm.validateField("checkPass");
        }
        callback();
      }
    };

    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Пожалуйста введите пароль еще раз"));
      } else if (value !== this.authForm.pass) {
        callback(new Error("Пароли не совпадают"));
      } else {
        callback();
      }
    };

    return {
      authForm: {
        pass: "",
        checkPass: "",
        age: "",
        email: ""
      },
      authRuls: {
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ],
        age: [{ required: true, validator: checkAge, trigger: "blur" }],
        email: [
          {
            required: true,
            message: "Пожалуйста введите email",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Не корректный email",
            trigger: ["blur", "change"]
          }
        ]
      },

      showSignupForm: true
    };
  },

  computed: {
    isModalVisible: {
      get: function() {
        return this.$store.state.modals.userAuth;
      },

      set: function() {
        this.$store.commit("dialogShow", { name, show: false });
      }
    }
  },

  methods: {
    close(name) {
      this.$store.commit("dialogShow", { name, show: false });
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.close("userAuth");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>

.auth-dialog {

  

}

</style>
