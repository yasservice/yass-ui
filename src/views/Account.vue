<template>
  <section class="user-page">
    <h1 class="user-page__title">User name</h1>

    <el-tabs v-model="activeTap" @tab-click="tabChange">
      <el-tab-pane label="Профиль" name="profile">
        <div class="user-page__photo-wrap">
          <el-upload
            class="user-page__photo-wrap avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div
              class="avatar-uploader__info"
            >Поддерживаемые форматы: JPEG, PNG или GIF. Макс. размер: 10 МБ.</div>
          </el-upload>
        </div>

        <el-form ref="additionalForm" :model="accountData" :rules="formRules" class="account-form">
          <el-form-item label="Логин" prop="login">
            <el-input v-model="accountData.login"></el-input>
          </el-form-item>
          <el-form-item label="Статус" prop="status">
            <el-input v-model="accountData.customStatus"></el-input>
          </el-form-item>
          <el-form-item label="О себе" prop="about">
            <el-input v-model="accountData.about" type></el-input>
          </el-form-item>

          <el-form-item label="День рождения" prop="birtday">
            <el-date-picker type="date" placeholder="27.12.1996" v-model="accountData.birtday"></el-date-picker>
          </el-form-item>

          <el-form-item>
            <el-button @click="submitAdditionalForm" type="primary">Сохранить</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Конфиденциальная информация" name="confidential">
        <div class>
          <div>Адресс электронной почты</div>
          <div>kazakon2@mail.ru</div>

          <el-button @click="changeEmailAddress">
            <i class="el-icon-edit"></i>
          </el-button>
        </div>

        <transition name="fade">
          <el-form
            ref="confidentialForm"
            :model="accountData"
            :rules="formRules"
            v-if="isUserConfirmPass && isUserWantTChangePass"
          >
            <el-form-item label="Новый пароль" prop="newPass">
              <el-input v-model="accountData.newPass" type="password"></el-input>
            </el-form-item>
            <el-form-item label="Повторите новый пароль" prop="newPassConfirm">
              <el-input v-model="accountData.newPassConfirm" type="password"></el-input>
            </el-form-item>

            <el-form-item label="Новый email" prop="newEmail">
              <el-input v-model="accountData.newEmail" type="email"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button @click="submitConfidentialForm" type="primary">Отправить</el-button>
              <el-button @click="resetForm('confidentialForm')">Отмена</el-button>
            </el-form-item>
          </el-form>
        </transition>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
<script>
export default {
  name: "Account",

  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Пожалуйста введите пароль"));
      } else {
        if (this.accountData.newPassConfirm !== "") {
          this.$refs.confidentialForm.validateField("newPassConfirm");
        }
        callback();
      }
    };

    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Пожалуйста введите пароль"));
      } else if (value !== this.accountData.newPass) {
        callback(new Error("Пароли не совпадают"));
      } else {
        callback();
      }
    };

    return {
      imageUrl: "",

      activeTap: "profile",

      isUserConfirmPass: false,
      isUserWantTChangePass: false,

      accountData: {
        login: "",
        about: "",
        newPass: "",
        newPassConfirm: "",
        newEmail: "",
        birtday: "",
        customStatus: ""
      },

      formRules: {
        login: [
          {
            min: 3,
            max: 50,
            message: "Логин может содержать от 3 до 50 символов",
            trigger: "blur"
          }
        ],
        birtday: [
          {
            type: "date",
            message: "Не коррекктная дата"
          }
        ],
        newPass: [
          {
            min: 6,
            message: "Пароль должен содержать минимум 6 символов",
            validator: validatePass,
            trigger: "blur"
          }
        ],
        newPassConfirm: [
          {
            message: "Пароли не совпадают",
            validator: validatePass2,
            trigger: "blur"
          }
        ],
        newEmail: [
          {
            type: "email",
            message: "Не Коррекктный email",
            trigger: "blur"
          }
        ]
      },

      // rulesAdditional: {
      //   login: [
      //     {
      //       min: 3,
      //       max: 50,
      //       message: "Логин может содержать от 3 до 50 символов",
      //       trigger: "blur"
      //     }
      //   ],
      //   birtday: [
      //     {
      //       type: "date",
      //       message: "Не коррекктная дата"
      //     }
      //   ]
      // },

      errors: null,
      status: ""
    };
  },

  computed: {},

  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);

      console.log(this.imageUrl);
    },

    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("Avatar picture must be JPG format!");
      }
      if (!isLt2M) {
        this.$message.error("Avatar picture size can not exceed 2MB!");
      }
      return isJPG && isLt2M;
    },

    validateForm(name) {
      let isValidate;
      
      this.$refs[name].validate(valid =>  {
        isValidate = valid;
      });
      
      return isValidate;
    },

    resetForm(name) {
      this.$refs[name].resetFields();
    },

    submitConfidentialForm() {
      console.log(this.validateForm('confidentialForm'));

      if (!this.validateForm('confidentialForm')) {
        this.$message({
          type:'error',
          message: 'Ошибка'
        });

        return;
      }

      /**
       * TODO оправта данных на api
       */

      this.$message({
          type:'success',
          message: 'Ваши данные успешно изменены'
        });
    },

    submitAdditionalForm() {
      if (!this.validateForm('additionalForm')) {
        this.$message({
          type:'error',
          message: 'Ошибка'
        });

        return;
      }

      /**
       * TODO оправта данных на api
       */

      this.$message({
          type:'success',
          message: 'Ваши данные успешно изменены'
        });
    },

    tabChange(tab, event) {
      console.log(tab, event);
    },

    saveAdditionalUserData() {
      if (!this.actieTab === "profile") return;
      if (!this.model.login && !this.model.about && !this.model.birthdy) {
        this.$meassage;
      }

      this.$confirm(
        "Вы дейсвительно хотите изменить ваши данные?",
        "Вы дейсвительно хотите изменить ваши данные?",
        {
          confirmButtonText: "Да",
          cancelButtonText: "Отмена",
          type: "warning",
          center: true
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "Данные успешно изменены"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Данные не изменились"
          });
        });
    },

    changeEmailAddress() {
      this.$confirm(
        "Вы дейсвительно хотите изменить email?",
        "Введите пароль",
        {
          confirmButtonText: "Да",
          cancelButtonText: "Отмена",
          type: "warning",
          showInput: true,
          inputType: "password",
          inputValidator: value => {
            if (value.toSting() === "") return "Пароль не может быть пустым";
            if (value.length <= 6)
              return "Пароль должен содержать больше 6 символов";

            return true;
          },
          center: true
        }
      )
        .then(() => {
          this.isUserWantTChangePass = true;

          /**
           * TODO проверить пароль пользователя
           */

          this.isUserConfirmPass = true;

          this.$message({
            type: "success",
            message: "Данные успешно изменены"
          });
        })
        .catch(() => {
          this.isUserWantTChangePass = false;
          this.isUserConfirmPass = false;

          this.$message({
            type: "info",
            message: "Данные не изменились"
          });
        });
    }
  }
};
</script>

<style lang="scss">
.user-page {
  .el-form-item {
    margin-bottom: 3%;
  }
}
</style>
<style lang="scss" scoped>
</style>