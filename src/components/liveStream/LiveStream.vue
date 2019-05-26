<template>
  <div class="live-stream">
    <stream class="live-stream__video"></stream>

    <div class="live-stream__info">
      <card :cardInfo="cardData" class="live-stream__info-card"></card>

      <div class="live-stream__info-btns">
        <button class="btn-reset btn-primary btn-primary--subscribe">
          <span class="btn-primary__icon">
            <font-awesome-icon :icon="faHeart" aria-label="true"></font-awesome-icon>
          </span>
          <span class="btn-primary__text">subscribe</span>
        </button>

        <button class="btn-reset btn-share">
          <span class="btn-share__text">share</span>
          <span class="btn-share__icon">
            <font-awesome-icon :icon="faShare" aria-label="true"></font-awesome-icon>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./elements/Card";
import Stream from "./elements/Stream";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "LiveStream",

  components: {
    Card,
    Stream,
    faHeart,
    faShare
  },

  data() {
    return {
      cardData: {
        title: "New title",
        category: "hardstone",
        img: "s.png",
        hashtags: [
          {
            text: "Last Fight",
            path: "/"
          },
          {
            text: "Shit Happens",
            path: "/"
          }
        ]
      },

      //icons
      faHeart,
      faShare
    };
  }
};
</script>

<style lang="scss" scoped>
  .live-stream {

    &__info {
      display: flex;
      align-items: center;
      margin-top: 10px;

      &-btns {
        margin-left: auto;
        display: inline-flex;
        flex-direction: column;
      }
    }

    .btn-share {
      margin-top: 20px;
    }
  }
</style>

