<template>
  <div class="stream">
    <div class="stream__body" :class="{'stream__body--move': showChat}">
      <el-tabs v-model="streamTab" class="stream__tabs">
        <el-tab-pane label="User" name="user">
          <live-stream></live-stream>
        </el-tab-pane>
        <el-tab-pane label="Videos" name="videos">videos</el-tab-pane>
      </el-tabs>

      <button class="btn-reset link-primary stream__show-chat" @click="showChat = !showChat">
        <span>chat</span>

        <span class="link-primary__icon">
          <i class="el-icon-arrow-left" v-if="!showChat" key="left"></i>
          <i class="el-icon-arrow-right" v-else key="right"></i>
        </span>
      </button>

      <transition name="fade">
        <chat class="stream__chat" v-show="showChat"></chat>
      </transition>
    </div>
  </div>
</template>

<script>
import DefaultHeader from "@/components/elements/DefaultHeader";
import LiveStream from "@/components/liveStream/LiveStream";
import Chat from "@/components/chat/Chat";

export default {
  name: "Stream",

  components: {
    LiveStream,
    Chat
  },

  data() {
    return {
      streamTab: "user",

      showChat: false
    };
  }
};
</script>

<style lang="scss" scoped>
.stream {
  &__body {
    position: relative;
    height: 100vh;
    padding-right: 5px;

    transition: margin-right ease-in-out 0.3s;
    will-change: margin-right;

    &--move {
      margin-right: 243px;
    }
  }

  &__show-chat {
    position: absolute;
    right: 0px;
    top: 0px;
  }

  &__chat {
    position: fixed;
    top: 55px;
    right: 0;
    // height: 90%;
  }
}
</style>
