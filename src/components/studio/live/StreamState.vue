<template>
  <section class="stream-state studio-block">
    <open-new-window :title="'State'"></open-new-window>

    <div class="stream-state__body">
      <figure class="stream-state__item">
        <div class="stream-state__info">
          <font-awesome-icon :icon="faUser" aria-label="true"></font-awesome-icon>
          <p class="stream-state__info-amount">{{ cannelData.viewers }}</p>
        </div>
        <figcaption class="stream-state__type">viewers</figcaption>
      </figure>
      <figure class="stream-state__item">
        <div class="stream-state__info">
          <font-awesome-icon :icon="faClock" aria-label="true"></font-awesome-icon>
          <p class="stream-state__info-amount">{{ cannelData.duraction }}</p>
        </div>
        <figcaption class="stream-state__type">duraction</figcaption>
      </figure>
      <figure class="stream-state__item">
        <div class="stream-state__info">
          <font-awesome-icon :icon="faHeart" aria-label="true"></font-awesome-icon>
          <p class="stream-state__info-amount">{{ cannelData.followers }}</p>
        </div>
        <figcaption class="stream-state__type">followers</figcaption>
      </figure>
    </div>
  </section>
</template>
<script>
import OpenNewWindow from "@/components/elements/OpenNewWindow";
import { faUser, faHeart, faClock } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "StreamStatus",

  components: {
    OpenNewWindow
  },

  data() {
    return {
      cannelData: {
        viewers: 500,
        duraction: 1,
        followers: 200
      },

      faUser,
      faHeart,
      faClock
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss">
.stream-state {
  &__body {
    display: flex;
    justify-content: space-between;
  }

  &__info {
    display: flex;
    align-items: center;

    color: $primary;
    font-size: 22px;
    line-height: normal;

    &-amount {
      margin: 0;
      padding-left: 10px;
      color: $white;
    }
  }

  &__item {
    margin: 0;
  }

  &__type {
    color: $info;
    font-size: 14px;
    line-height: normal;
    text-align: center;
  }
}
</style>