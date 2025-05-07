<template>
    <UModal
      :close="{ onClick: () => emit('close', false) }"
      :title="`Add New Chore`"
    >
    <template #body>
        <UForm
            :state="state"
            :schema="schema"
            class="flex flex-col gap-4"
            @submit="onSubmit"
        >
            <UFormField name="name" label="Name">
                <UInput v-model="state.name" class="w-full" />
            </UFormField>
            <!-- <UFormField name="description" label="Description">
                <UInput v-model="state.description" class="w-full" type="textarea" min-rows="3" />
            </UFormField> -->
            <UFormField name="points" label="Points">
                <UInput v-model="state.points" type="number" class="w-full" />
            </UFormField>
            <UButton label="Add Chore" type="submit" />
        </UForm>
    </template>
    </UModal>
  </template>
  
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()

const schema = z.object({
    name       : z.string().min(5, 'Must be at least 5 characters'),
    description: z.string().min(5, 'Must be at least 5 characters'),
    points     : z.number().min(1, 'Must be at least 1'),
})

type schema = z.infer<typeof schema>

const state = reactive<Partial<schema>>({
    name       : undefined,
    description: undefined,
    points     : undefined,
})

const onSubmit = (event: FormSubmitEvent<schema>) => {
    console.log('submitted')
    console.log(event.data)
    toast.add({
        title: 'Chore added',
        description: 'Chore added successfully',
    })
    emit('close', true)
}

const emit = defineEmits<{ close: [boolean] }>()
</script>