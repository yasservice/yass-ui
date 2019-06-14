<template>
  <div class="setting-form">
    <h1 class="setting-form__title">Setting</h1>
    <el-form :model="form" :rules="rules" ref="authForm" @submit.prevent="submitForm" class="setting-form__form">
      <el-row :gutter="gutter">
        <el-col :md="10">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
        <el-col :md="14">
          <el-form-item prop="name" label="Name">
            <el-input type="name" required v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item prop="email" label="Email">
            <el-input type="email" required v-model="form.email"></el-input>
          </el-form-item>
        </el-col>

        <el-col>
          <el-form-item label="Bio">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="12">
          <el-form-item label="Stream Security Token" prop="token">
            <el-input type="password" v-model="form.token"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="6" class="md-40">
          <button class="btn-reset btn-primary btn-primary--light-primary btn__fluid">
            <span class="btn-primary__icon">
              <font-awesome-icon :icon="faCopy" aria-label="true"></font-awesome-icon>
            </span>
            <span class="btn-primary__text">Copy</span>
          </button>
        </el-col>
        <el-col :md="6" class="md-40">
          <button class="btn-reset btn-primary btn-primary--subscribed btn__fluid">
            <span class="btn-primary__icon">
              <font-awesome-icon :icon="faSync" aria-label="true"></font-awesome-icon>
            </span>
            <span class="btn-primary__text">Refresh</span>
          </button>
        </el-col>
        <el-col>
          <button class="btn-reset btn-primary btn-primary--primary btn__fluid" type="submit">
            <span class="btn-primary__icon">
              <font-awesome-icon :icon="faCheck" aria-label="true"></font-awesome-icon>
            </span>
            <span class="btn-primary__text">Save</span>
          </button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { faCopy, faCheck, faSync } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "Form",

  components: {
    faCopy,
    faCheck,
    faSync
  },

  data() {
    return {
      faCopy,
      faCheck,
      faSync,

      form: {
        name: "",
        email: "",
        desc: "",
        token: ""
      },

      rules: {
        name: [{ required: true, min: 3, trigger: "change" }],
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
        ]
      }
    };
  },

  computed: {
    gutter() {
      return this.$store.state.blockSpace;
    }
  },

  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
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

    submitForm() {
      console.log(this.form);
    }
  }
};
</script>

<style lang="scss" scoped>
.setting-form {
  &__title {

  }

  &__form {
    max-width: 500px;
  }

  .md-40 {
    @include adopt('md-and-up') {
      margin-top: 40px;
    }
  }
}
  
</style>
