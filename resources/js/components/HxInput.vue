<script setup>
defineProps({
	isTextArea: {
		type: Boolean,
		default: false
	},
	value: {
		type: String,
		default: ''
	},
	placeholder: {
		type: String,
		default: ''
	},
	customClass: {
		type: String,
		default: ''
	},
	customStyle: {
		type: String,
		default: ''
	},
	defaultClass: {
		type: String,
		default: 'w-full form-control form-input form-input-bordered border-none'
	}
});
defineEmits(['update:value']);
</script>

<template>
	<textarea
		v-if="isTextArea"
		:class="defaultClass + ' ' + customClass + ' resize-none hx-input-textarea'"
		:style="customStyle"
		:placeholder="placeholder"
		:value="value"
		@change="$emit('update:value', $event.target.value)"
	></textarea>
	<input
		v-else
		:class="defaultClass + ' ' + customClass + ' hx-input-textarea'"
		:style="customStyle"
		:placeholder="placeholder"
		:value="value"
		@change="$emit('update:value', $event.target.value)"
	>
</template>

<style scoped>
.hx-input-textarea:focus {
	outline: none;
	box-shadow: none;
}
</style>
