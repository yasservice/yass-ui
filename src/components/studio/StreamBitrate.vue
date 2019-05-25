<template>
  <section class="stream-bitrates studio-block">
    <open-new-window :title="'Bitrate'"></open-new-window>

   
  </section>
</template>
<script>
import OpenNewWindow from "../elements/OpenNewWindow";

export default {
  name: "StreamStatus",

  components: {
    OpenNewWindow,
  },

  data() {
    return {
      
    };
  },

  mounted() {
     
  },

  methods: {
    
  }
};
</script>

<style lang="scss">
.stream-status {
 
}
</style>