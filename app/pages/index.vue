<template>
    <div class="container mx-auto">
        <div class="flex flex-col gap-4 items-center w-48 m-auto">
            <ChoreItem 
                v-for="chore in chores"
                :key="chore.id"
                :chore-label="chore.chore_name"
                :story-points="chore.story_points"
            /> 
            <ChoreAdd />
        </div>
    </div>
</template>

<script lang="ts" setup>

const supabase = useSupabaseClient()

interface Chore {
    id: number
    chore_name: string
    story_points: number
}

const { data } = await supabase.from('chores').select('*')
const chores = ref<Chore[]>(data || [])

</script>

<style scoped>


</style>