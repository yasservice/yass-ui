<template>
  <div>
    <el-popover
    placement="bottom"
    width="auto"
    trigger="click"
    popper-class="user-popover">
    <div class="user-popover__body">
        <ul class="user-popover__list ul">
          <li class="user-popover__item"
          v-for="(item, index) in list"
          :key="'user-popover' + index"
          >
          <router-link v-if="item.link" :to="{ path: item.link }" class="user-popover__link link link--hover">
            {{ item.text }}
          </router-link>

          <button v-else class="user-popover__link link link--hover btn-reset">
            {{ item.text }}
          </button>   
          </li>
        </ul>
    </div>
    <button slot="reference" class="user-wrap">
      <div class="user-avatar">

      </div>

      <div class="user-login">
        ePadamans
      </div>

      <span>
        <i class="el-icon-arrow-down"></i>
      </span>
    </button>
  </el-popover>
  </div>
</template>

<script>
export default {
  name: 'UserPopover',

  data() {
    return {
      list: [
        {
          link: '/',
          text: 'Channel'
        },{
          text: 'Language'
        }, {
          text: 'Settings',
          link: '/account',
        }, {
          text: 'Log Out',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-popover {
    background: $bg--darker;

    &__body {
      // padding: 15px;
    }

    &__link {
      display: inline-block;
      width: 100%;
      padding: 8px;
      border-radius: $--border-radius-base;

      text-align: left;
    }

    .user-wrap {
      width: 140px;
      height: 30px;
      display: flex;
      align-items: center;

      background: $bg-darkest;
      border-radius: $--border-radius-base;
    }

    .user-avatar {
      width: 30px;
      height: 30px;

      border-radius: 50%;

      background: url($assets + 'Avatar.png') no-repeat center center;
    }
  }
</style>
