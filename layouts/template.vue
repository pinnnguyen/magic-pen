<script setup>
</script>

<template>
  <Body class="bg-white-50 antialiased">
    <div class="absolute inset-x-0 top-0 z-0 h-[400px]" />
    <div class="absolute inset-x-0 top-0 z-0 h-[400px] overflow-hidden opacity-10">
      <section class="grid-bg" />
    </div>
    <div class="relative mx-auto max-w-[1280px] px-5">
      <PageHeader />
      <div class="relative">
        <slot />
      </div>
      <PageFooter />
    </div>
  </Body>
</template>
