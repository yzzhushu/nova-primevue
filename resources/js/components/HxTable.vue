<script setup>
import {defineProps, defineEmits} from "vue";

const prop = defineProps({
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
        default: '320px'
    },
    pt: {
        type: JSON,
        default: {
            root: 'mt-1 mb-1',
            headerrow: 'h-8'
        }
    }
});
const emit = defineEmits(['row:selected']);
</script>

<template>
    <DataTable
        scrollable
        :scrollHeight="scrollHeight"
        :virtualScrollerOptions="{itemSize: 32}"
        :value="lists"
        selectionMode="single"
        @rowSelect="emit('row:selected', $event)"
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
