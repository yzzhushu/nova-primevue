<script setup>
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
        default: '400px'
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
            headerrow: {
                style: 'height: 40px'
            }
        }
    }
});
let options = prop.scrollOption;
options.items = prop.lists;

defineEmits(['row:selected']);
</script>

<template>
    <DataTable
        scrollable
        :scrollHeight="scrollHeight"
        :virtualScrollerOptions="options"
        :value="lists"
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
