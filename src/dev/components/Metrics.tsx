import { fileTextIcon, imageIcon, stopwatchIcon } from './icons.js'

export function Metrics() {
  return (
    <div
      class="bg-background-100 border rounded-md flex flex-row divide-x"
      style={{ justifyContent: 'space-around' }}
      x-data={`{
        get metrics() {
          return [
            { icon: '${stopwatchIcon}', name: 'speed', value: formatSpeed(data.request.metrics.speed) },
            { icon: '${fileTextIcon}', name: 'frame size', value: formatFileSize(data.request.metrics.htmlSize) },
            { icon: '${imageIcon}', name: 'image size', value: formatFileSize(data.request.metrics.imageSize) },
          ]
        }
      }`}
    >
      <template x-for="metric in metrics">
        <div
          class="items-center flex font-mono gap-1.5 text-sm justify-center"
          style={{ flex: '1', padding: '0.685rem' }}
        >
          <span class="text-gray-700" x-html="metric.icon" />
          <div class="text-gray-1000" x-text="metric.value" />
        </div>
      </template>
    </div>
  )
}
