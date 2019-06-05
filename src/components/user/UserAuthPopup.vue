<template>
  <el-dialog
    class="auth-dialog"
    title="Tips"
    :visible.sync="isModalVisible"
    @close="close('userAuth')"
    width="40%"
    center
    :append-to-body="true"
    :fullscreen="true"
  >
    <div slot="title" clss="auth-dialog__header">
      <img :src="require(`@/assets/logo.png`)" alt="stream logo" class="auth-dialog__header-img">
      <h2 class="auth-dialog__header-title">{{ popupTitle }}</h2>
      <p class="auth-dialog__header-subtitle">{{ popupSubtitle }}</p>
    </div>

    <el-form
      v-if="whichFormShow === 'signup'"
      :model="authForm"
      status-icon
      :rules="authRuls"
      ref="authForm"
      class="auth-form regestrations-form"
      id="signupForm"
    >
      <el-form-item prop="name" label="Name">
        <el-input
          v-model="authForm.name"
          type="text"
          @focus="transformToDefaultInput"
          @blur="transformInput"
        ></el-input>
      </el-form-item>

      <el-form-item prop="email" label="Email">
        <el-input
          v-model="authForm.email"
          type="email"
          @focus="transformToDefaultInput"
          @blur="transformInput"
        ></el-input>
      </el-form-item>

      <el-form-item label="Age" prop="age">
        <el-input
          v-model.number="authForm.age"
          type="number"
          @focus="transformToDefaultInput"
          @blur="transformInput"
        ></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="pass">
        <el-input
          type="password"
          v-model="authForm.pass"
          autocomplete="off"
          @focus="transformToDefaultInput"
          @blur="transformInput"
        ></el-input>
      </el-form-item>
      <el-form-item label="Confirm" prop="checkPass">
        <el-input
          type="password"
          v-model="authForm.checkPass"
          autocomplete="off"
          @focus="transformToDefaultInput"
          @blur="transformInput"
        ></el-input>
      </el-form-item>

      <div class="auth-dialog__btn-body">
        <button class="btn-reset btn-auth" @click.prevent="submitForm('authForm')">sign up</button>
      </div>

      <button class="btn-reset change-form-btn" @click.prevent="changeForm('signin')">sign in</button>
    </el-form>

    <el-form
      v-else-if="whichFormShow === 'signin'"
      :model="authForm"
      status-icon
      :rules="authRuls"
      ref="authForm"
      class="auth-form authorization-form"
      id="loginForm"
    >
      <el-form-item prop="email" label="Email">
        <el-input
          v-model="authForm.email"
          type="email"
          @focus="transformToDefaultInput"
          @blur="transformInput"
        ></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="pass">
        <el-input
          type="password"
          v-model="authForm.pass"
          autocomplete="off"
          @focus="transformToDefaultInput"
          @blur="transformInput"
        ></el-input>
      </el-form-item>

      <div class="auth-dialog__btn-body">
        <button class="btn-reset btn-auth" @click.prevent="submitForm('authForm')">sign in</button>
      </div>

      <p class="auth-dialog__change-form">
        Forgot Password?
        <button class="btn-reset" @click.prevent="changeForm('pass')">Reset</button>
      </p>

      <button class="btn-reset change-form-btn" @click.prevent="changeForm('signup')">sign up</button>
    </el-form>

    <el-form
      v-else
      :model="authForm"
      status-icon
      :rules="authRuls"
      ref="authForm"
      class="auth-form authorization-form"
      id="loginForm"
    >
      <el-form-item prop="email" label="Email">
        <el-input
          v-model="authForm.email"
          type="email"
          @focus="transformToDefaultInput"
          @blur="transformInput"
        ></el-input>
      </el-form-item>

      <div class="auth-dialog__btn-body">
        <button class="btn-reset btn-auth" @click.prevent="submitForm('authForm')">Reset password</button>
      </div>

      <p class="auth-dialog__change-form">
        Remember password ?
        <button class="btn-reset" @click.prevent="changeForm('signin')">Sign in</button>
      </p>
    </el-form>
  </el-dialog>
</template>

<script>
import { AUTH_REQUEST } from "@/store/modules/auth/index";

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
        callback(new Error("Please enter password"));
      } else {
        if (this.authForm.checkPass !== "") {
          this.$refs.authForm.validateField("checkPass");
        }
        callback();
      }
    };

    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter password again"));
      } else if (value !== this.authForm.pass) {
        callback(new Error("Password don't match"));
      } else {
        callback();
      }
    };

    const checkName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter name"))
      } else if (value.length <= 2) {
        callback(new Error("Name must contain at least 3 character"))
      } else {
        callback();
      }
    };

    return {
      authForm: {
        pass: "",
        checkPass: "",
        age: "",
        email: "",
        name: "",
      },

      authRuls: {
        pass: [{ required: true, validator: validatePass, trigger: "change" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "change" }
        ],
        age: [{ required: true, validator: checkAge, trigger: "change" }],
        email: [
          {
            required: true,
            message: "Please enter email",
            trigger: "change"
          },
          {
            type: "email",
            message: "It's not look like email",
            trigger: ["change", "change"]
          }
        ],
        name: [{required: true, validator: checkName, trigger: "change" }]
      },

      whichFormShow: "signin",

      isFormCorrect: false,

      popupTitle: "SIGN IN",
      popupSubtitle: "Hello there! Sign in and start having fun"
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
    /**
     * close popup
     */
    close(name) {
      // reset form to default
      this.changeForm("signin");

      // close popup
      this.$store.commit("dialogShow", { name, show: false });
    },

    /**
     * animate label input
     */
    transformInput(event) {
      const inputWrap = event.target.parentElement.parentElement.parentElement; //TODO переписать
      const label = inputWrap.querySelector("label");
      if (
        label.classList.contains("reset-transform") &&
        event.target.value === ""
      ) {
        label.classList.remove("reset-transform");
      }
    },

    /**
     * return labels to defaut position
     */
    transformToDefaultInput(event) {
      const inputWrap = event.target.parentElement.parentElement.parentElement; //TODO переписать
      const label = inputWrap.querySelector("label");
      if (!label.classList.contains("reset-transform")) {
        label.classList.add("reset-transform");
      }
    },

    /**
     * chnage form
     */
    changeForm(formName) {
      // reset form
      this.resetForm("authForm");

      // if form label is animated return to default
      const label = document.querySelector("label.reset-transform");
      if (label) {
        label.classList.remove("reset-transform");
      }

      // swith to form
      switch (formName) {
        case "signin": {
          this.whichFormShow = "signin";
          this.popupTitle = "SIGN IN";
          this.popupSubtitle = "Hello there! Sign in and start having fun";
          return;
        }

        case "signup": {
          this.whichFormShow = "signup";
          this.popupTitle = "SIGN up";
          this.popupSubtitle = "Hello there! Sign up and start having fun";
          return;
        }

        default: {
          this.whichFormShow = "reset";
          this.popupTitle = "Reset password";
          this.popupSubtitle = "";
          return;
        }
      }
    },

    /**
     * submin form
     */
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          console.error("error submit!!");
          return false;
        }

        //
        switch (this.whichFormShow) {
          case "signin": {
            this.signIn();
            return;
          }

          case "signup": {
            this.signUp();
            return;
          }

          default: {
            this.resetPassword();
            return;
          }
        }
        
      });
    },

    /**
     * reset form
     */
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    /**
     * signup user
     */
    signUp() {
      const { pass: password, email, age, name } = this.authForm;

      console.log("signup called");

      this.close("userAuth");
      this.resetForm("authForm");

      this.$store.dispatch("user/signupUser", { name, email, password });
    },

    /**
     * login user
     */
    signIn() {
      const { pass: password, email } = this.authForm;

      console.log("singin called");

      this.close("userAuth");
      this.resetForm("authForm");

      // this.$store.dispatch(AUTH_REQUEST, {email, password})
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .cath((e) => {
      //     console.error(e);
      //   })

      console.log(password, email);
    },

    /**
     * reset password
     */
    resetPassword() {
      const { email } = this.authForm;

      console.log("resetpass called");

      this.close("userAuth");
      this.resetForm("authForm");

      console.log(email);
    }
  }
};
</script>

<style lang="scss">
.auth-dialog {
  .el-dialog__body {
    // height: 100%;
  }
}

#signupForm,
#loginForm {
  max-width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  input {
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;

    color: $white;
  }

  label {
    position: relative;
    transform: translateY(45px) scale(1.2);

    color: $white;

    transition: 0.1s cubic-bezier(0.39, 0.58, 0.57, 1) transform,
      0.1s cubic-bezier(0.39, 0.58, 0.57, 1) color;

    &.reset-transform {
      color: $info;
      transform: translateY(0) scale(1);
    }
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .el-form-item.is-success .el-input__inner {
    border-color: $primary;
  }

  .el-form-item.is-success .el-input__validateIcon {
    color: $primary;
  }
}
</style>


<style lang="scss" scoped>
.auth-dialog {
  &__header {
    &-title {
      text-transform: uppercase;
    }

    &-subtitle {
      margin: 0;
      color: $white;
    }
  }

  &__btn-body {
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }

  .change-form-btn {
    margin-top: auto;
    margin-bottom: 20px;

    font-size: 16px;
    line-height: 20px;
    color: $primary;
    text-transform: uppercase;

    transform: scale(1);
    transition: 0.2s linear transform;

    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }

  &__change-form {
    margin-top: 0;
    width: 100%;
    display: inline-flex;
    justify-content: center;

    color: $info;
    text-align: center;

    button {
      color: $white;

      transition: 0.1s linear color;

      &:hover,
      &:focus {
        color: $primary;
      }
    }
  }
}
</style>
