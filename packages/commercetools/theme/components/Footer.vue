<template>
  <div class="footer">
    Copyright 2020 © <b>Circle K Stores and Alimentation Couche-Tard.</b>
  </div>
</template>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.footer {
  color: #909090;
  background: #f4f4f4;
  font-size: .9em;
  padding: 30px;
  text-align: center;
  vertical-align: middle;
  margin-top: 20px;
  margin-bottom: 0;
  @include for-mobile {
    margin-bottom: 61px;
  }
}
</style>
