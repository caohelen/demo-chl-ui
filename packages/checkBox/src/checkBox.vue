<template>
  <div class="chl-checkbox">
    <span class="chl-checkbox_input">
      <input
        type="checkbox"
        v-model="model"
        :indeterminate="indeterminate"
        :disabled="disabled"
        :name="name"
        :checked="isChecked"
        @change="handleChange"
        :value="label"
      />
    </span>
    <span class="chl-checkbox_label">
      <slot></slot>
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useCheckBoxProps } from "./useCheckBoxProps";

export default defineComponent({
  name: "chl-check-box",
  // 属性复杂
  props: {
    indeterminate: Boolean,
    checked: Boolean,
    name: String,
    disabled: Boolean,
    label: [String, Number, Object],
    modelValue: [String, Number, Boolean],
  },
  emits: ["update:modelValue", "change"],
  setup(props, ctx) {
    return {
      ...useCheckBoxProps(props),
    };
  },
});
</script>
