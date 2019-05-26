<template>
  <section class="stream-status studio-block">
    <open-new-window :title="'Stream Status'"></open-new-window>

    <figure
      class="stream-status__body"
      :class="{
              'stream-status--good': streamStatus.text === 'good',
              'stream-status--bad': streamStatus.text === 'bad',
              'stream-status--terrible': streamStatus.text === 'terrible', 
          }"
    >
      <font-awesome-icon :icon="streamStatus.icon" aria-label="true"></font-awesome-icon>

      <figcaption class="stream-status__health">
        Stream Health
        <span class="stream-status__health-info">{{ streamStatus.text }}</span>
      </figcaption>
    </figure>
  </section>
</template>
<script>
import OpenNewWindow from "@/components/elements/OpenNewWindow";
import {
  faTimes,
  faCheck,
  faExclamation
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "StreamStatus",

  components: {
    OpenNewWindow,
    faTimes,
    faCheck,
    faExclamation
  },

  data() {
    return {
      streamStatus: {
        icon: null,
        text: ""
      },

      faTimes,
      faCheck,
      faExclamation
    };
  },

  mounted() {
      this.setStreamStatus();
  },

  methods: {
    setStreamStatus() {
      this.streamStatus.icon = this.faCheck;
      this.streamStatus.text = "good";
    }
  }
};
</script>

<style lang="scss">
.stream-status {
  &--good {
    color: $--color-success;
    .stream-status__health-info {
      color: $--color-success;
    }
  }

  &--bad {
    color: $--color-warning;
    .stream-status__health-info {
      color: $--color-warning;
    }
  }

  &--terrible {
    color: $--color-danger;
    .stream-status__health-info {
      color: $--color-danger;
    }
  }

  &__body {
    margin: 0px;
    font-size: 50px;
    text-align: center;
  }

  &__health {
    margin-top: 20px;

    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: $white;

    &-info {
      text-transform: capitalize;
    }
  }
}
</style>