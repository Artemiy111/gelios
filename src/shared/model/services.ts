import type { ServiceDb, ServiceSection } from '~~/server/db/schema'
import { servicesApi } from '../api/services'

export const serviceSectionsMap: Record<ServiceSection, string> = {
  property: 'Имущество',
  health: 'Здоровье',
}

export const serviceSections: ServiceSection[] = ['property', 'health']
export const serviceSectionsWithNames = serviceSections.map(section => ({ value: section, name: serviceSectionsMap[section] }))

export const useServicesModel = defineStore('services', () => {
  const services = ref<ServiceDb[]>([])

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
    services.value = await servicesApi.getAll()
  }

  load()

  return {
    services,
    servicesBySection,
    load,
    filter,
    filteredServicesBySection,
  }
})
