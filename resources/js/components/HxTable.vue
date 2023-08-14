<script setup>
defineProps({
    lists: {
        type: Array,
        required: true
    },
    columns: {
        type: Array,
        required: true
    },
    scrollHeight: {
        type: String,
        default: '360px'
    },
    scrollOption: {
        type: JSON,
        default: {
            itemSize: 40
        }
    },
    pt: {
        type: JSON,
        default: {
            root: 'mt-1 mb-1',
            headerrow: 'h-8',
            bodyrow: 'h-8'
        }
    }
});
defineEmits(['row:selected']);
</script>

<template>
    <DataTable
        :value="lists"
        scrollable
        :scrollHeight="scrollHeight"
        :virtualScrollerOptions="scrollOption"
        selectionMode="single"
        @rowSelect="$emit('row:selected', $event)"
        removableSort
        :pt="pt"
    >
        <Column
            v-for="column of columns"
            :field="column.field"
            :header="column.header"
            :sortable="column.sort"
        />
    </DataTable>
</template>
