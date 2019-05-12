<template>
  <div class="live-video">
    <div>
      <img :src="require(`@/assets/stream.png`)" alt="stream video">
    </div>

    <el-form ref="studioForm" :model="studioForm">
      <el-row :gutter="30">
        <el-col :span="12">
          <el-form-item label="Title">
            <el-input v-model="studioForm.title" placeholder="stream title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Category">
            <el-input
              v-model="studioForm.category"
              placeholder="stream category"
              suffix-icon="el-icon-search"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Live Notification">
            <el-input v-model="studioForm.liveNotification" placeholder="notification text"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Language">
            <el-input
              v-model="studioForm.language"
              placeholder="English"
              suffix-icon="el-icon-search"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <button
            class="live-video__update-btn btn-reset btn-primary btn-primary--primary"
            @click.prevent="submitForm"
          >
            <span class="live-video__update-btn-icon btn-primary__icon">
              <font-awesome-icon :icon="faRedo" aria-label="true" :spin="isFormSubmited"></font-awesome-icon>
            </span>
            <span class="btn-primary__text">Update info</span>
          </button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { faRedo } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "LiveVideo",

  components: {
    faRedo
  },

  data() {
    return {
      studioForm: {
        title: "",
        liveNotification: "",
        category: "",
        language: ""
      },
      faRedo,

      isFormSubmited: false
    };
  },

  methods: {
    async submitForm() {
      this.isFormSubmited = true;
      await setTimeout(() => (this.isFormSubmited = false), 1500);
    }
  }
};
</script>

<style lang="scss" scoped>
.live-video {
  &__update-btn {
    margin-top: 43px;

    &-icon {
    }
  }
}
</style>