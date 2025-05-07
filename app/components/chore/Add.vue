<template>
    <UButton
        variant="solid"
        color="secondary"
        size="lg"
        icon="i-lucide-plus"
        class="cursor-pointer w-full"
        @click="openModal"
    >
        Add Chore
    </UButton>
</template>

<script lang="ts" setup>
import { ModalAddChore } from '#components'

const overlay = useOverlay()

const modal = overlay.create(ModalAddChore)

const openModal = () => {
    console.log(modal)
    modal.open()
}

</script>

<style lang="scss" scoped>


</style>