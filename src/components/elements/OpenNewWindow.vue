<template>
  <header class="open-new-window">
    <h2 class="open-new-window__title">{{ title }}</h2>
    <button class="btn-reset open-new-window__btn">
      <font-awesome-icon :icon="faExternalLinkAlt" :aria-label="true"></font-awesome-icon>
    </button>
  </header>
</template>
<script>
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "OpenNewWindow",

  components: {
    faExternalLinkAlt
  },

  props: {
    title: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      faExternalLinkAlt
    };
  }
};
</script>

<style lang="scss">
.open-new-window {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  &__title {
    margin: 0;

    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }

  &__btn {
    color: $icon;
  }
}
</style>
