<template>
  <div class="wrapper">
    <h1>Developer<br />Portfolio</h1>

    <div>
      <b class="name"> Vivian Lampman </b> <br />

      Email:
      <a href="mailto:vivian.lampman+portfolio@gmail.com"> vivian.lampman@gmail.com </a> <br />

      Phone:
      <a href="tel:847-322-1857"> 847-322-1857 </a> <br />

      Github:
      <a href="https://github.com/espoire">
        <img
          src="https://avatars.githubusercontent.com/u/16272456?s=40&amp;v=4"
          alt="@espoire"
          size="20"
          height="20"
          width="20"
          class="circle"
        />
        @espoire
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

h1 {
  line-height: 1.2;
}

.circle {
  vertical-align: middle;
  border-radius: 50%;
}
</style>
