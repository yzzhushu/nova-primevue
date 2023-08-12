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
    scrollerOption: {
        type: JSON,
        default: {
            itemSize: 40
        }
    }
});
const emit = defineEmits(['row:selected']);

</script>

<template>
    <DataTable
        scrollable
        :scrollHeight="scrollHeight"
        :virtualScrollerOptions="scrollerOption"
        :value="lists"
        selectionMode="single"
        @rowSelect="emit('row:selected', $event)"
    >
        <Column v-for="column of columns" :field="column.field" :header="column.header"></Column>
    </DataTable>
</template>
