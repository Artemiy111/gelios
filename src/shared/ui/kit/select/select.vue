<script setup lang="ts">
import { Chevron } from '~~/src/shared/ui/icons'

const props = defineProps<{
  options: Array<{
    value: string
    name: string
  }>
}>()

const model = defineModel<string>()

const emit = defineEmits<{
  open: []
  close: []
  blur: []
}>()

const id = 'select-' + useId()

const currentValueName = computed(() => props.options.find(option => option.value === model.value)?.name)
const hasPlaceholder = computed(() => currentValueName.value === undefined)

const popover = useTemplateRef<HTMLDivElement>('popover')

const close = () => {
  emit('close')
  emit('blur')
  popover.value?.hidePopover()
}

const onToggle = (e: ToggleEvent) => {
  if (e.newState === 'open') emit('open')
  if (e.newState === 'closed') close()
}
</script>

<template>
  <div class="select">
    <button
      :popovertarget="id"
      popovertargetaction="show"
      type="button"
    >
      <span :class="{ placeholder: hasPlaceholder }">{{ currentValueName || 'Выберете значение' }}</span>
      <Chevron class="chevron" />
    </button>
    <div
      :id="id"
      ref="popover"
      class=""
      popover
      role="combobox"
      @toggle="onToggle"
    >
      <ul>
        <li
          v-for="option in props.options"
          :key="option.value"
          role="option"
          @click="() => {
            model = option.value
            close()
          }"
        >
          {{ option.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
button {
  position: relative;

  overflow: hidden;
  display: block;
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: 2rem;

  width: 100%;
  padding: 1rem 2.2rem;
  border: none;

  font-size: var(--text-base);
  line-height: var(--text-base-line-height);
  text-align: start;

  background: var(--color-foreground);

  anchor-name: --select;

}

span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

span.placeholder {
  color: var(--color-text-tertiary);
}

.chevron {
  margin-block-start: 1.7rem;
}

[popover] {
  position: absolute;
  inset: unset;
  inset-block-start: 2rem;;

  padding-block: 2rem;
  padding-inline: 3rem;
  border: 1px solid var(--color-separator);

  opacity: 0;
  background: var(--color-background);

  transition: opacity var(--transition-duration);

  position-anchor: --select;
  /* stylelint-disable-next-line property-no-unknown -- position-area */
  position-area: bottom span-right;
  transition-behavior: allow-discrete;

  &:popover-open {
    opacity: 1;

    @starting-style {
      opacity: 0;
    }
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
  }

  & li {
    cursor: pointer;
    transition: color var(--transition-duration);

    &:hover {
      color: var(--color-accent);
    }
  }
}
</style>
