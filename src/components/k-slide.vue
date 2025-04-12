<template>
  <div class="custom-slide">
    <div v-for="(item, index) in list" :key="index" class="slide-item">
      <a :href="item.link"><k-image :src="item.img" :width="item.w" :height="item.h" /></a>
      <div class="slide-text">
        <p class="slide-title">{{ item.title }}</p>
        <p class="slide-subtitle">{{ item.subtitle }}</p>
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
const list = CONFIG_MAP[props.type]?.slideList || []
</script>

<style>
.custom-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  margin-bottom: 120px;
}
.custom-slide .slide-item {
  position: relative;
  margin-right: 24px;
  overflow: hidden;
  border-radius: 16px;
}
.custom-slide .slide-item:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 30%;
  background: linear-gradient(180deg,rgba(0,0,0,0.00), rgba(0,0,0,0.80) 80%);
  cursor: pointer;
  transition: all 0.36s ease-out;
  border-radius: 0 0 16px 16px;
  pointer-events: none;
}
.custom-slide .slide-item:last-child {
  margin-right: 0;
}
.custom-slide .slide-item .slide-text {
  position: absolute;
  left: 0;
  bottom: -74px;
  z-index: 5;
  transition: all 0.36s ease-out;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  cursor: pointer;
  pointer-events: none;
}

.custom-slide .slide-item:hover::before {
  height: 70%;
}

.custom-slide .slide-item:hover .slide-text {
  bottom: 0;
}
.custom-slide .slide-title {
  position: relative;
  display: block;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin: 0;
}
.custom-slide .slide-item:hover .slide-title::before {
  content: '';
  position: absolute;
  top: -16px;
  left: 0;
  display: block;
  width: 45px;
  height: 6px;
  margin: 0;
  background-color: #03B588;
}
.custom-slide .slide-item .slide-subtitle {
  display: block;
  color: rgba(255,255,255,0.80);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin: 14px 0 0 0;
  height: 50px;
}
</style>