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
    }
});
defineEmits(['row:selected']);
</script>

<template>
    <DataTable
        :value="lists"
        scrollable
        :scrollHeight="scrollHeight"
        :virtualScrollerOptions="{itemSize: 40}"
        selectionMode="single"
        @rowSelect="$emit('row:selected', $event)"
        removableSort
        :pt="{
            root: 'mt-1 mb-1',
            headerrow: 'h-10',
            bodyrow: 'h-10'
        }"
    >
        <Column
            v-for="column of columns"
            :key="column.field"
            :field="column.field"
            :header="column.header"
            :sortable="column.sort"
            :style="'width: ' + (column.width ? column.width : (1 / columns.length)) + '%'"
        />
    </DataTable>
</template>

<style>
.custom-data-table-border {
    border-bottom-width: 1px;
    border-bottom-color: rgba(var(--colors-gray-100));
}
.custom-data-table-border:last-child {
    border-bottom-width: 0;
}
:is(.dark\:custom-data-table-border) {
    border-bottom-color: rgba(var(--colors-gray-700));
}
</style>
