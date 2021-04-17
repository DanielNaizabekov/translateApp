<template>
  <div class="field">
    <label class="label is-flex is-justify-content-space-between">
      <span>{{ options.label }}</span>

      <span v-if="hint" class="tag is-success is-light is-capitalized">
        {{ hint }}
      </span>
    </label>

    <div class="control has-icons-right">
      <input
        class="input"
        type="text"
        :placeholder="options.placeholder"
        :value="modelValue"
        @input="input"
      >
      <span
        class="lang-card-close icon is-meduim is-right"
        @click="clear"
      >
        <ion-icon size="small" name="close-outline" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: '',
      required: true,
    },
    options: {
      type: Object,
      default: () => ({
        label: 'Lang',
        placeholder: 'Type text',
      }),
    },
    hint: {
      type: String,
      default: '',
    }
  },
  methods: {
    input(event) {
      this.$emit('update:modelValue', event.target.value)
    },
    clear() {
      this.$emit('clear')
    }
  },
}
</script>

<style scoped>
.lang-card-close.icon {
  cursor: pointer;
  pointer-events: auto;
}
.lang-card-close.icon:hover {
  color: inherit;
}
</style>