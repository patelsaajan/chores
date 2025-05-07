<template>
    <UCollapsible class="flex flex-col gap-2 w-48">
      <UButton
        :label="choreLabel"
        color="neutral"
        variant="subtle"
        trailing-icon="i-lucide-chevron-down"
        block
      />
  
      <template #content>
        <div class="border-2 border-primary rounded-md p-2">
          <UFormGroup label="Story Points" class="flex flex-col gap-6">
            <UFormField label="Name">
              <UInput 
                v-model="itemValues.name"
                type="text"
                color="secondary" 
              />
            </UFormField>
            <UFormField label="Story Points">
              <UInput
                v-model="itemValues.storyPoints" 
                type="number"
                color="secondary" 
              />
            </UFormField>
            <UButton color="secondary" type="submit">Edit</UButton>
          </UFormGroup>
        </div>
      </template>
    </UCollapsible>
  </template>
  

<script lang="ts" setup>
import type { z } from 'zod'
import type { choreItemSchema } from '~~/schema/choreItem';

type ChoreItem = z.infer<typeof choreItemSchema>

const props = defineProps<{
    choreLabel: string
    storyPoints: number
}>()

const itemValues = reactive<ChoreItem>({
  name: props.choreLabel,
  storyPoints: props.storyPoints
})

</script>

<style lang="scss" scoped>


</style>