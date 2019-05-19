<template>
  <section class="chat">
    <open-new-window :title="'Chat'"></open-new-window>

    <div class="chat__body">
      <div class="chat__message" v-for="(item, index) in chat" :key="'chat-message' + index">
        <span class="chat__author">{{ item.author }}:</span>
        <span class="chat__text">{{ item.message }}</span>
      </div>

      <div class="chat__input-body">
        <textarea
          sytle="height: 20px;"
          name="chat__input"
          class="chat__input"
          maxlength="360"
          placeholder="Type your first message"
          v-model="message"
          @keyup.enter="sendMessage"
        ></textarea>

        <button class="btn-reset chat__send-message-btn" @click="sendMessage" :disabled="!message">
          <font-awesome-icon :icon="faPaperPlane" :aria-label="true"></font-awesome-icon>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import OpenNewWindow from "../elements/OpenNewWindow";

export default {
  name: "Chat",

  components: {
    faPaperPlane,
    OpenNewWindow
  },

  data() {
    return {
      faPaperPlane,

      chat: [
        {
          author: "ss",
          message: "sss"
        }
      ],

      message: null,
    };
  },

  methods: {
    sendMessage() {
      if (!this.message) return;

      this.chat.push({
        message: this.message,
        author: 'ss',
      });

      this.message = '';

      return;
    }
  },
};
</script>

<style lang="scss">
.chat {
  padding: 10px 12px;

  background-color: $bg--dark;
  border-radius: $--border-radius-base;

  &__body {
    width: 100%;
    min-height: 200px;
    max-height: 500px;
    margin-top: 20px;
    overflow-y: auto; 
    display: flex;
    flex-direction: column;
  }

  &__message {
    margin-bottom: 10px;

    font-size: 12px;
    line-height: 14px;
    color: $white;
    font-weight: bold;
  }

  &__author {
    color: $--color-danger;
  }

  &__input-body {
    position: relative;

    margin-top: auto;
  }

  &__input {
    width: 100%;
    padding: 10px 30px 10px 12px;
    overflow: hidden;

    border-radius: $--border-radius-base;

    background: $bg-darkest;
    outline: none;
    color: $white;
    border-color: $bg-darkest;
    resize: none;

    transition: 0.1s linear border-color;

    &:hover {
      border-color: $white;
    }

    &:focus {
      border-color: $primary--light;
    }
  }

  &__send-message-btn {
    position: absolute;
    bottom: 50%;
    right: 5px;

    transform: translate(0, 50%);

    color: $primary;

    &:hover,
    &:focus {
      color: $primary--light;
    }
  }
}
</style>