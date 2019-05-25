<template>
  <section class="stream-bitrates studio-block">
    <open-new-window :title="'Bitrate'"></open-new-window>

    <div class="ct-chart stream-bitrates__stats"></div>
  </section>
</template>
<script>
import OpenNewWindow from "../elements/OpenNewWindow";
import Chartist from "chartist";

export default {
  name: "StreamStatus",

  components: {
    OpenNewWindow
  },

  data() {
    return {
      chartData: {
        labels: ["A", "B", "C"],
        series: [[1, 3, 2], [4, 6, 5]]
      },
      chartOptions: {
        lineSmooth: false
      }
    };
  },

  mounted() {
    this.initCharts();
  },

  methods: {
    initCharts() {
      new Chartist.Line(
        ".ct-chart",
        {
          labels: [],
          series: [[7000, 5000, 100]]
        },
        {
          fullWidth: true,
          showArea: true,
          showPoint: false,
          chartPadding: {
            right: 40
          },

          axisY: {
            labelInterpolationFnc: function(value) {
              return value / 1000 + "k";
            }
          },
          axisX: {
            showGrid: false,
            showLabel: false
          }
        }
      );
    }
  }
};
</script>

<style lang="scss">
.stream-bitrates {
  &__stats {
    color: $info;
    font-size: 16px;
  }
}
</style>