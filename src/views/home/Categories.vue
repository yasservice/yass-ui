<template>
  <el-row class="home__categories categories" :gutter="gutter" tag="section">
    <el-col class="caregories__col">
      <h2 class="section-title section-title--neon-blue">categories</h2>
    </el-col>

    <el-col
      class="categories__col"
      :xs="24"
      :sm="8"
      :lg="6"
      :xl="4"
      v-for="(item, index) in categoriesList"
      :key="'categories__col' + index"
    >
      <router-link :to="item.link" class="categories__link categories__link--hover card-syle">
        <font-awesome-icon
          :icon="item.icon"
          size="6x"
          aria-label="true"
          class="categories__link-icon categories__link--hover-icon"
        ></font-awesome-icon>

        <h3 class="categories__link-title  categories__link--hover-title">{{ item.name }}</h3>
        <p class="categories__link-info categories__link--hover-info">
          Смотрят
          <span>{{ item.viewers }}</span>
        </p>
      </router-link>
    </el-col>
  </el-row>
</template>
<script>
import {
  faGhost,
  faGraduationCap,
  faLaughSquint,
  faFileAudio,
  faMusic,
  faRunning
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Categories",

  components: {
    faGhost,
    faGraduationCap,
    faLaughSquint,
    faFileAudio,
    faMusic,
    faRunning
  },

  data() {
    return {
      categoriesList: [
        {
          name: "Игры",
          link: "/",
          icon: faGhost,
          viewers: 555
        },
        {
          name: "Обучение",
          link: "/",
          icon: faGraduationCap,
          viewers: 555
        },
        {
          name: "Развлечение",
          link: "/",
          icon: faLaughSquint,
          viewers: 555
        },
        {
          name: "Подкасты",
          link: "/",
          icon: faFileAudio,
          viewers: 555
        },
        {
          name: "Музыка",
          link: "/",
          icon: faMusic,
          viewers: 555
        },
        {
          name: "Тренировка",
          link: "/",
          icon: faRunning,
          viewers: 555
        }
      ]
    };
  },

  computed: {
    gutter() {
      return this.$store.getters.getBlockSpace;
    }
  }
};
</script>
<style lang="scss" scoped>
$height: 200px;
// Эффект для карточек https://codepen.io/jorgesanes10/pen/QdMEXr?editors=1100
.categories {
  margin-bottom: 40px;
  &__col {
  }

  &__link {
    display: flex;
    flex-direction: column;
    min-height: 300px;

    text-decoration: none;

    transition: 0.2s all ease-in-out;

    & * {
      transition: 0.2s all ease-in-out;
    }

    &-title {
      margin: 0;
      margin-top: auto;
      margin-bottom: 0;
    }

    &-info {
      padding: 0;
      margin: 0;

      font-size: 1rem;
      line-height: 1.2;
    }

    &-icon {
      margin: 0 auto;
    }

    &--hover {
      &:hover,
      &:focus {
        color: $black;
        background: $yellow;
      }

      &:hover &-title,
      &:focus &-title {
        color: $black;
      }
    }
  }
}
</style>