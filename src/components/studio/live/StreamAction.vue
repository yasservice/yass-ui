<template>
  <section class="actions studio-block">
    <open-new-window :title="'Actions'" style="margin-bottom: 5px"></open-new-window>

    <!-- <el-form ref="studioForm" :model="studioForm" :rules="rules">
      <el-form-item label="Language">
        <el-input v-model="studioForm.language" placeholder="English" suffix-icon="el-icon-search"></el-input>
      </el-form-item>
    </el-form>-->

    <el-input v-model="searchAction" placeholder="Type anything" suffix-icon="el-icon-search"></el-input>

    <div class="actions__body action">
      <!-- <el-scrollbar
        wrap-class="actions__content-scroll"
        wrap-style
        view-style=";"
        view-class="actions__content-view-box"
        :native="false"
      > -->
        <div class="action__item" v-for="(item, index) in actionsData" :key="'action-item' + index">
          <span class="action__user-name">{{ item.userName }}</span>
          <span class="action__info">{{ item.info }}</span>
          <div class="action__message" v-if="item.message">
            <span class="action__message-title">Message</span>
            <span class="action__message-text">{{ item.message }}</span>
          </div>
        </div>
      <!-- </el-scrollbar> -->
    </div>
  </section>
</template>
<script>
import OpenNewWindow from "@/components/elements/OpenNewWindow";

export default {
  name: "StreamAction",

  components: {
    OpenNewWindow
  },

  data() {
    return {
      searchAction: null,

      actionsData: [
        {
          userName: "fready228",
          info: "just sent you 15$",
          message: "long haired freaky people need not apply"
        },
        {
          userName: "fready228",
          info: "just subscribed you"
        },
        {
          userName: "fready228",
          info: "just subscribed you"
        }
      ]
    };
  },

  methods: {}
};
</script>

<style lang="scss">
.actions {
  height: 100%;
  &__body {
    margin-top: 10px;
    // height: 300px;
    // overflow: hidden;
  }

  &__content {
    &-scroll {
      // height: 300px;
    }

    &-view-box {
      display: flex;
      flex-direction: column;
      height: 100%;
      //   padding-right: 12px;
    }
  }
  .action {
    &__item {
      padding: 10px;
      margin-bottom: 10px;
      border-radius: $--border-radius-base;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      background-color: $bg--most-darkest;
      color: $white;
    }

    &__user-name {
      color: $primary;
      margin-right: 5px;
    }

    &-info {
      color: $white;
      font-size: 12px;
      line-height: 14px;
    }

    &__message {
      margin-top: 5px;

      &-title {
        color: $info;
        margin-right: 5px;
      }

      &-text {
        color: $white;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
}
</style>