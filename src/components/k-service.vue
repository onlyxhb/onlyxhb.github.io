<template>
  <div class="custom-service-card">
    <k-gap gap="66" />
    <p class="custom-title">{{ info.serviceTitle }}</p>
    <k-gap gap="24" />
    <p v-if="info.serviceSubtitle" class="custom-subtitle">{{ info.serviceSubtitle }}</p>
    <k-gap gap="80" />
    <div class="custom-other-service">
      <k-image :src="info.serviceBg" :width="info.serviceW" :height="info.serviceH" />
      <div
        v-for="(item, idx) in info.serviceList"
        :key="idx"
        class="other-service-item"
        :class="{ 'service-item-first': idx === 0, 'service-item-last': idx === info.serviceList.length - 1 }"
        :style="{ width: `${100 / info.serviceList.length}%`, left: `${100 / info.serviceList.length * idx}%` }">
        <k-image :src="item.img" width="49" height="48" />
        <span>{{ item.title }}</span>
        <ul v-if="item.details">
          <li v-for="(detail, index) in item.details" :key="index">{{ detail }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { CONFIG_MAP } from '../constant/index.js'

const props = defineProps({
  type: {
    type: String,
    default: 'home'
  }
})
const info = CONFIG_MAP[props.type] || {}
</script>

<style>
.custom-service-card {
  background-color: #fafafa;
}
.custom-other-service {
  position: relative;
  display: inline-flex;
}
.custom-other-service .custom-img {
  position: static !important;
  transform: none !important;
}
.custom-other-service .other-service-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 96px;
}
.custom-other-service .other-service-item::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  content: '';
  backdrop-filter: blur(13px);
  opacity: 0.5;
  background: rgba(0,0,0,0.50);
  transition: all 0.36s ease-out;
}
.custom-other-service .other-service-item span {
  padding: 32px 0 0;
}
.custom-other-service .other-service-item.service-item-first::before {
  border-radius: 16px 0 0 16px;
}
.custom-other-service .other-service-item.service-item-last::before {
  border-radius: 0 16px 16px 0;
}
.custom-other-service .other-service-item .custom-img,
.custom-other-service .other-service-item span {
  position: relative;
  z-index: 5;
}
.custom-other-service .other-service-item ul {
  position: relative;
  z-index: 5;
  margin-top: 32px;
  margin-left: 8px;
  color: rgba(255,255,255,0.90);
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  display: none;
}

.custom-other-service .other-service-item:hover {
  justify-content: center;
  padding-bottom: 0;
  cursor: pointer;
}

.custom-other-service .other-service-item:hover::before {
  opacity: 1;
}

.custom-other-service .other-service-item:hover .custom-img {
  display: none !important;
}

.custom-other-service .other-service-item:hover span {
  padding: 0;
}

.custom-other-service .other-service-item:hover ul {
  display: block;
}
</style>