<template>
  <div>
    <start-section></start-section>
    <benefits-section></benefits-section>
    <adventages-section></adventages-section>
  </div>
</template>

<script>
import StartSection from '@/components/blocks/start-section/StartSection.vue'
import BenefitsSection from '@/components/blocks/benefits-section/BenefitsSection.vue'
import AdventagesSection from '@/components/blocks/adventages-section/AdventagesSection.vue'
export default {
  components: {
    StartSection,
    BenefitsSection,
    AdventagesSection
}
}
</script>

<style lang="scss">

</style>