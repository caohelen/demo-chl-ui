<template>
  <div>app</div>
  <span>button</span>
  <chl-button-group>
    <chl-button type="primary" disabled>确定</chl-button>
    <chl-button type="success" round>成功</chl-button>
  </chl-button-group>
  <span>layout</span>
  <chl-row tag="div">
    <chl-col tag="span" :span="6">
      <div style="background: red">1</div>
    </chl-col>
    <chl-col tag="span" :span="6">
      <div style="background: blue">2</div>
    </chl-col>
    <chl-col tag="span" :span="6">
      <div style="background: pink">3</div>
    </chl-col>
    <chl-col tag="span" :span="6">4</chl-col>
  </chl-row>

  <span>checkbox</span>
  <chl-check-box v-model="checkd" @change="handleChnage"
    >单个checkbox</chl-check-box
  >
  <span>checkboxgroup</span>
  <chl-check-box-group v-model="checkBoxData" @change="handleGroupChange">
    <chl-check-box
      v-for="(item, index) in checkBoxList"
      :key="index"
      :label="item"
      >{{ item }}
    </chl-check-box>
  </chl-check-box-group>

  <span>Message</span>
  <chl-button type="primary" @click="handleOpend">打开message</chl-button>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Message from "@chl-ui/message";

const checkd = ref(true);
let checkBoxData = ref(["上海", "深圳", "杭州"]);
let checkBoxList = ref(["上海", "深圳", "杭州", "北京"]);
const handleChnage = (val) => {
  console.log("====================================");
  console.log(val);
  console.log("====================================");
};
const handleGroupChange = (val) => {
  console.log("====================================");
  console.log(val);
  console.log("====================================");
};
const handleOpend = () => {
  Message({
    message: "你好",
    type: "success",
  });
};
</script>
