<template>
  <div>
    <start-section></start-section>
    <benefits-section></benefits-section>
    <adventages-section></adventages-section>
    <competencies-section></competencies-section>
  </div>
</template>

<script>
import StartSection from '@/components/blocks/start-section/StartSection.vue'
import BenefitsSection from '@/components/blocks/benefits-section/BenefitsSection.vue'
import AdventagesSection from '@/components/blocks/adventages-section/AdventagesSection.vue'
import CompetenciesSection from '@/components/blocks/competencies-section/CompetenciesSection.vue'

export default {
  components: {
    StartSection,
    BenefitsSection,
    AdventagesSection,
    CompetenciesSection
}
}
</script>

<style lang="scss">

</style>