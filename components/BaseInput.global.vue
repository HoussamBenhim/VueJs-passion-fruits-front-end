<template>
  <div class="border">
    <input
      :id="id"
      :type="type"
      :autocomplete="autocomplete"
      :required="required"
      class="rounded-sm relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm"
      :placeholder="placeHolder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur-event')"
      @click="$emit('click-event')"
      @focus.self="$emit('focus-event')"
      @focusout.self="$emit('focusout-event')"
    />
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  components: {},
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    placeHolder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    autocomplete: {
      type: String,
      default: 'text',
    },
    id: {
      type: [String, Number],
      default: '',
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      inputValue: '',
    }
  },
}
</script>

<style lang="css"></style>
