<template>
  <div class="band-page">
  
    <default-header :title="defaultHeader.title" :breadcrumbs="defaultHeader.breadcrumbs"></default-header>

    <categories></categories>

    <!-- <streams></streams> -->
    <stream-tabs></stream-tabs>
  </div>
</template>

<script>
import Categories from '@/components/categories/Categories';
import StreamTabs from '@/components/streams/StreamTabs';
import DefaultHeader from '@/components/elements/DefaultHeader';

export default {
  name: 'Band',

  components: {
    Categories,
    StreamTabs,
    DefaultHeader
  },

  data() {
    return {
      defaultHeader: {
        breadcrumbs: [
          {
            text: 'Band',
            pathName: ''
          }
        ],

        title: 'Band'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.band-page {

  &__title {
    margin-right: 40px;

    &-wrap {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }
}
  
</style>
