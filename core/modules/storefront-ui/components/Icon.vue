<template>
  <div class="vsf-icon">
    {{ type }}
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: {
      required: true,
      type: String
    }
  }
}
</script>
