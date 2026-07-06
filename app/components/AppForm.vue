<script lang="ts" setup>
import type { TypedSchema } from 'vee-validate'

const props = defineProps<{
  name: string
  btnText?: string
  validationSchema: TypedSchema
}>()

const { start, finish } = useLoadingIndicator()

const { values, handleSubmit } = useForm({
  name: props.name,
  validationSchema: props.validationSchema,
})

const url = useRequestURL()

const { execute } = await useFetch('/api/form', {
  method: 'POST',
  watch: false,
  immediate: false,
  body: {
    ...values,
    'form-name': props.name,
    'page': url,
  },
  onRequest: start,
  onResponse: finish,
})

const onSubmit = handleSubmit(() => {
  execute()
})
</script>

<template>
  <form
    :action="url.href"
    data-netlify="true"
    netlify-honeypot="bot-field"
    method="POST"
    :name="name"
    novalidate
    @submit="onSubmit"
  >
    <slot />
    <app-button
      type="submit"
      :is-full-width="true"
      class="btn"
      :title="btnText"
      size="large"
    />
  </form>
</template>

<style lang="css" scoped>
  .bot-field {
    display: none;
  }
</style>
