<script lang="ts" setup>
import { language } from '~/constants'

const languageSelected = useLanguage()
</script>

<template>
  <TextArea :placeholder="usePlaceholder().value" rows="15" />
  <div>
    <label for="targetLang" class="mb-3 block text-sm text-secondary-500">Select target language</label>
    <div class="my-3">
      <select v-model="languageSelected" class="block w-full rounded-md border-secondary-300 text-sm shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary-50">
        <option v-for="lan in language" :key="lan" :value="lan">
          {{ lan }}
        </option>
      </select>
    </div>
  </div>
</template>
