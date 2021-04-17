<template>
  <div class="home">
    <LangCard
      v-for="lang in langList"
      :key="lang"
      v-model="form[lang]"
      :options="translateOptions[lang]"
      :hint="autocomplete[lang]"
      @input="setTranslates(lang)"
      @clear="resetForm"
    />
  </div>
</template>

<script>
import { getLongestObjectInArray } from '@/utils/index'
import { translateOptions, translates } from '@/utils/translates'

import LangCard from '@/components/LangCard.vue'

export default {
  components: { LangCard },
  data() {
    return {
      form: {},
      translateOptions,
      translates,
      autocomplete: {},
    }
  },
  computed: {
    langList() {
      const translate = getLongestObjectInArray(this.translates)
      return Object.keys(translate)
    },
  },
  methods: {
    resetForm({ exceptField } = {}) {
      this.autocomplete = {}
      const form = {}

      this.langList.forEach(lang => {
        form[lang] = ''
      })

      form[exceptField] = this.form[exceptField]
      this.form = form
    },
    setTranslates(lang) {
      const value = this.form[lang].toLowerCase().trim()

      const translate = this.translates.find(translate => {
        const targetValue = translate[lang]?.toLowerCase()?.trim()
        const isEqual = targetValue === value
        if (isEqual) {
          return true
        }

        const isIncludes = targetValue?.includes(value)
        if (value.length >= 2 && isIncludes) {
          return true 
        }
      })
      if (!translate) {
        this.resetForm({ exceptField: lang })
        return
      }

      const translateCopy = JSON.parse(JSON.stringify(translate))
      this.autocomplete = { [lang]: translateCopy[lang] }

      translateCopy[lang] = this.form[lang]
      this.form = translateCopy
    },
  },
}
</script>

<style scoped>
.home {
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.home > * {
  flex: 1;
  flex-basis: 200px;
}
</style>