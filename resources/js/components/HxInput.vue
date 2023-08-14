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
		default: 'w-full form-control form-input form-input-bordered border-none outline-none'
	}
});
defineEmits(['update:value']);
</script>

<template>
	<textarea
		v-if="isTextArea"
		:class="defaultClass + ' ' + customClass + ' resize-none'"
		:style="'box-shadow: none;' + customStyle"
		:placeholder="placeholder"
		:value="value"
		@change="$emit('update:value', $event.target.value)"
	></textarea>
	<input
		v-else
		:class="defaultClass + ' ' + customClass"
        :style="'box-shadow: none;' + customStyle"
		:placeholder="placeholder"
		:value="value"
		@change="$emit('update:value', $event.target.value)"
	>
</template>
