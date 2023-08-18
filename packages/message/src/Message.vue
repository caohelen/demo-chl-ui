<template>
  <transition
    name="chl-message-fade"
    @before-leave="onclose"
    @after-leave="$emit('destroy')"
  >
    <div class="chl-message" :class="clas" :style="stylee" v-show="show">
      {{ message }}
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted, computed } from "vue";

export default defineComponent({
  name: "message",
  props: {
    id: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "success",
    },
    duration: {
      type: Number,
      default: 2000,
    },
    center: {
      type: Boolean,
      default: true,
    },
    offset: {
      type: Number,
      default: 20,
    },
    onclose: {
      type: Function,
    },
  },
  setup(props) {
    let show = ref(false);
    const timme = "";
    onMounted(() => {
      show.value = true;
      timmer();
    });
    const timmer = () => {
      setTimeout(() => {
        show.value = false;
      }, props.duration);
    };
    // 处理样式
    const clas = computed(() => {
      const center = props.center ? "is-center" : "";
      return `chl-message--${props.type} ${center}`;
    });
    // 清除定时器
    onUnmounted(() => {
      clearTimeout(timme);
    });
    // 计算偏移量
    const stylee = computed(() => {
      return { top: `${props.offset}px` };
    });
    return {
      show,
      clas,
      stylee,
    };
  },
});
</script>
