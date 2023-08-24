<script setup>
const props = defineProps({
    lists: {
        type: Array,
        required: true
    },
    columns: {
        type: Array,
        required: true
    },
    scrollHeight: {
        type: String
    }
});
if (props.scrollHeight === undefined) {
    props.scrollHeight = Math.min(360, props.lists.length * 40 + 40) + 'px';
}

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
            root: 'mt-1 mb-1 relative',
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
