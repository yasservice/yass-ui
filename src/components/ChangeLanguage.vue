<template>
    <el-collapse class="change-language" id="changeLanguage">
        <el-collapse-item :title="language" class="change-language__item">
            <button class="change-language__btn link btn-reset">English</button>
            <button class="change-language__btn link btn-reset">Русский</button>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
export default {
  name: "ChangeLanguage",

  data() {
    return {
      language: 'language',
    };
  }
};
</script>

<style lang="scss">
#changeLanguage  {
    border: none;

    .change-language__item .el-collapse-item__header {
        padding-left: 8px;
        
        background: $bg-darkest;
        border-radius: $--border-radius-base;
        border: none;
        color: $info;
        height: 34px;

        &:hover,
        &:focus {
            background: $link--hover-bg;
            color: $white;
        }
    }

    .change-language__btn {
        width: 100%;
        padding: 8px;
        border-radius: $--border-radius-base;

        text-align: left;

        &:hover,
        &:focus {
            background: $link--hover-bg;
            color: $white;
        }
    }

    .el-collapse-item__wrap {
        background:  $bg-darkest;
        border: none;
    }

    .el-collapse-item__content {
        padding: 0;
        margin: 0;
        margin-top: 10px;
        margin-bottom: 10px;
    }
}

</style>
