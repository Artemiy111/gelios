import type { ServiceDb, ServiceSection } from '~~/server/db/schema'
import { servicesApi } from '../api/services'

export const serviceSectionsMap: Record<ServiceSection, string> = {
  property: 'Имущество',
  health: 'Здоровье',
}

export const serviceSections: ServiceSection[] = ['property', 'health']
export const serviceSectionsWithNames = serviceSections.map(section => ({ value: section, name: serviceSectionsMap[section] }))

type Status = 'idle' | 'loading' | 'success' | 'fail'

export const useServicesModel = defineStore('services', () => {
  const services = ref<ServiceDb[]>([])
  const status = ref<Status>('idle')

  const servicesBySection = computed(() => {
    const grouped = Object.groupBy(services.value, service => service.section)
    const sections = Object.entries(grouped).map(([section, services]) => ({
      section: section as ServiceSection,
      title: serviceSectionsMap[section as ServiceSection],
      services,
    }))
    return sections
  })

  const filter = ref('')

  const filteredServicesBySection = computed(() => {
    const filtered = servicesBySection.value.map((section) => {
      const sectionNamePassFilter = section.title.toLowerCase().includes(filter.value.toLowerCase())

      if (sectionNamePassFilter) return {
        passFilter: true,
        section,
      }

      const filteredServices = section.services.filter((service) => {
        const servicePassFilter
          = service.title.toLowerCase().includes(filter.value.toLowerCase())
          || service.description.toLowerCase().includes(filter.value.toLowerCase())
        return servicePassFilter
      })

      return {
        passFilter: filteredServices.length > 0,
        section: {
          ...section,
          services: filteredServices,
        },
      }
    })
    return filtered.filter(({ passFilter }) => passFilter).map(({ section }) => section)
  })

  const load = async () => {
    try {
      status.value = 'loading'
      services.value = await servicesApi.getAll()
      status.value = 'success'
    }
    catch (_e) {
      status.value = 'fail'
      throw _e
    }
  }

  const useService = (id: number) => {
    const service = computed(() => services.value.find(service => service.id === id))
    return service
  }

  load()

  return {
    services,
    servicesBySection,
    status,
    load,
    useService,
    filter,
    filteredServicesBySection,
  }
})
