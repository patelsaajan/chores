<template>
    <div class="container mx-auto">
        <div class="flex flex-col gap-4 items-center">
            <ChoreItem 
                chore-label="Wash dishes"
            />
            <ChoreItem 
                chore-label="Laundry"
            />
            <ChoreItem 
                chore-label="Bin"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>

const supabase = useSupabaseClient()

const { data } = await supabase.from('chores').select('*')

console.log('data::', data)

</script>

<style scoped>


</style>