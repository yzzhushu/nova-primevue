<script setup>
import {defineProps, defineEmits, ref} from "vue";

const prop = defineProps({
	textArea: {
		type: Boolean,
		default: false
	},
	formCss: {
		type: String,
		default: 'w-full form-control form-input form-input-bordered border-none'
	},
	customCss: {
		type: String,
		default: ''
	},
	placeholder: {
		type: String,
		default: ''
	}
});
const inputText = ref('');
const emit = defineEmits(['input:change']);
</script>

<template>
	<textarea
		v-if="textArea"
		:class="formCss + ' ' + customCss + ' resize-none hx-input-textarea'"
		style="height: calc(100% - 1.5rem);"
		:placeholder="placeholder"
		v-model="inputText"
		@change="emit('input:change', inputText)"
	></textarea>
	<input
		v-else
		:class="formCss + ' ' + customCss + ' hx-input-textarea'"
		v-model="inputText"
		:placeholder="placeholder"
		@change="emit('input:change', inputText)"
	>
</template>

<style scoped>
.hx-input-textarea:focus {
	outline: none;
	box-shadow: none;
}
</style>
