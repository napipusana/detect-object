<template>
  <button
    data-pid
    data-vid
    data-qty
    data-lt
    data-avgp
    class="btn"
    :class="{ disabled: spinning }"
    @click.prevent="onClick"
  >
    <div v-show="!spinning">
      <slot>Button</slot>
    </div>
    <div v-show="spinning" class="spinner-border" role="status" />
  </button>
</template>
<script>
export default {
  props: {
    click: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      spinning: false
    }
  },
  methods: {
    onClick(event) {
      event.preventDefault()
      this.spinning = true
      this.click(this)
    },
    stop() {
      this.spinning = false
    },
    start() {
      this.spinning = true
    }
  }
}
</script>
