<script setup>
import Sound from '../../util/Sound.js';

function playSound() {
  Sound.swapClick.play()
}
</script>

<template>
  <div class="buttonWrap">
    <div class="buttonBorder" @click="playSound">
      <div class="button">
        <span class="buttonText">
          <slot></slot>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buttonWrap {
  position: relative;
  border-radius: 5dvmin;
  font-size: 8dvmin;
}

.buttonBorder {
  position: relative;
  border: 0.8dvmin solid #fff;
  border-radius: 5dvmin;
  background-color: inherit;
  
  left: 0;
  top: 0;

  transition: 0.2s;
  &:hover:not(:active) {
    left: -0.5dvmin;
    top: -0.5dvmin;
    filter: drop-shadow(0.5dvmin 0.5dvmin 0 gray);
  }

  pointer-events: all;
  cursor: pointer;
  
  color: #fff;
  line-height: 1;
  white-space: nowrap;
}

.button {
  background: linear-gradient(transparent, #fff4, transparent 30%, transparent, #0004);
  
  padding: 1dvmin;
  padding-bottom: 2dvmin;
  border: 0.3dvmin solid #0008;
  border-radius: 4dvmin;

  text-align: center;
}

.buttonText {
  filter: drop-shadow(0.3dvmin 0.3dvmin 0 gray);
}
</style>