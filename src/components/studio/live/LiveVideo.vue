<template>
  <div class="live-video">
    <div>
      <video-player :options="videoOptions"></video-player>
    </div>

    <el-form ref="studioForm" :model="studioForm" :rules="rules" class="live-video__form">
      <el-row :gutter="20">
        <el-col :lg="12">
          <el-form-item label="Title">
            <el-input v-model="studioForm.title" placeholder="stream title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="12" :xl="6">
          <el-form-item label="Category">
            <el-input
              v-model="studioForm.category"
              placeholder="stream category"
              suffix-icon="el-icon-search"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="12" :xl="6">
          <el-form-item label="Category">
            <el-input
              v-model="studioForm.language"
              placeholder="English"
              suffix-icon="el-icon-search"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="12">
          <el-form-item label="Live Notification">
            <el-input v-model="studioForm.liveNotification" placeholder="notification text"></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="12" :xl="6">
          <el-form-item label="Stream Record">
          </el-form-item>
           <div class="input input-checkbox">
              <el-checkbox v-model="studioForm.record">Save record</el-checkbox>
            </div>
        </el-col>
        <el-col :lg="12" :xl="6">
          <button
            class="live-video__update-btn btn-reset btn-primary btn-primary--primary btn__fluid"
            @click.prevent="submitForm('studioForm')"
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
import VideoPlayer from "@/components/video/VideoPlayer";

export default {
  name: "LiveVideo",

  components: {
    faRedo,
    VideoPlayer
  },

  data() {
    return {
      studioForm: {
        title: "",
        liveNotification: "",
        category: "",
        language: "",
        record: true
      },
      rules: {
        title: [
          {
            min: 3,
            required: true,
            message: "title must containt more than 2 characters"
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }
        ],
        liveNotification: [
          {
            min: 3,
            message: "notification must containt more than 2 characters",
            trigger: "change"
          }
        ],
        category: [
          {
            min: 3,
            message: "category must containt more than 2 characters",
            trigger: "change"
          }
        ],
        language: [
          {
            min: 3,
            message: "language must containt more than 2 characters",
            trigger: "change"
          }
        ]
      },

      videoOptions: {
        // autoplay: true,
        controls: true,
        poster: require(`@/assets/stream.png`),

        sources: [
          {
            src: "https://vjs.zencdn.net/v/oceans.mp4",
            type: "video/mp4"
          }
        ]
      },

      // icon
      faRedo,

      isFormSubmited: false
    };
  },

  methods: {
    async submitForm(formName) {
      this.isFormSubmited = true;
      await setTimeout(() => (this.isFormSubmited = false), 1500);

      this.$refs[formName].validate(valid => {
        if (!valid) return;

        console.log(this.$refs[formName]);
      });
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

  &__form {

  }

  .input-checkbox {
    margin-top: -22px;
    height: 38px;
    display: flex;
    align-items: center;
    
    span {
      font-weight: normal;
    }
  }
}
</style>