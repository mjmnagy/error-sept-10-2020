<template>
  <div class="status-list" v-bind:style="{ color: color }">
    <div v-if="isArrayx">
      <ul class="list">
        <li
          v-for="(item, i) in text"
          v-bind:key="i"
          class="text-validation list__item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div v-else class="text-validation list__item">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isArrayx() {
      return Array.isArray(this.text)
    }
  },
  data() {
    return {
      text: this.$parent.text
    }
  },
  props: {
    color: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.status-list {
  background: inherit;
}
/* List text */
.text-validation:first-child {
  padding: 0.1667rem 0.33rem;
  padding-top: 0.5rem;
}

.text-validation:last-child {
  padding: 0.1667rem 0.33rem;
  padding-bottom: 0.33rem;
}

ul.list {
  display: block;
  margin: 0;
  padding: 0;
  margin-left: 1rem;
}
.list__item {
  list-style-type: disc;
  display: list-item;
}
</style>
