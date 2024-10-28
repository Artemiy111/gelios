import { z } from 'zod'

const formatter = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'short' })

export const validationErrors = {
  required: 'Это обязательное поле',
  email: 'Неверный формат электронной почты',
  minLength: (min: number) => `Длина должна быть не менее ${min}`,
  maxLength: (max: number) => `Длина должна быть не более ${max}`,
  pattern: 'Значение не соответствует шаблону',
  minValue: (min: number) => `Значение должно быть не менее ${min}`,
  maxValue: (max: number) => `Значение должно быть не более ${max}`,
  minDate: (min: Date) => `Дата должна быть не раньше ${formatter.format(min)}`,
  maxDate: (max: Date) => `Дата должна быть не позже ${formatter.format(max)}`,
  passwordsNotMatch: 'Пароли не совпадают',
  invalidPhoneNumber: 'Неверный номер телефона',
}

const requiredStringSchema = z.string({ message: validationErrors.required })
const requiredNumberSchema = z.number({ message: validationErrors.required })

const getMinMaxStringSchema = (min: number, max: number) => requiredStringSchema.min(min, validationErrors.minLength(min)).max(max, validationErrors.maxLength(max))
const getMinMaxNumberSchema = (min: number, max: number) => requiredNumberSchema.min(min, validationErrors.minValue(min)).max(max, validationErrors.maxValue(max))

const passwordSchema = getMinMaxStringSchema(8, 20)
const emailSchema = requiredStringSchema.email(validationErrors.email)

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export type LoginRequest = z.infer<typeof loginSchema>

export type DocumentType = 'residence-permit' | 'passport-russian' | 'passport-foreign' | 'temporary-id-russian'

export const documentTypes = ['residence-permit', 'passport-russian', 'passport-foreign', 'temporary-id-russian'] as const
export const documentTypesMap: Record<DocumentType, string> = {
  'residence-permit': 'Удостоверение личности',
  'passport-russian': 'Паспорт РФ',
  'passport-foreign': 'Паспорт иностранного гражданина',
  'temporary-id-russian': 'Временный удостоверение личности гражданина РФ',
}
export const documentTypesWithNames = documentTypes.map(documentType => ({ value: documentType, name: documentTypesMap[documentType] }))

export const documentTypeSchema = z.enum(['residence-permit', 'passport-russian', 'passport-foreign', 'temporary-id-russian'], { message: validationErrors.required })

const dateSchema = z
  .coerce.date({ message: validationErrors.required })
  .min(new Date('1900-01-01'), validationErrors.minDate(new Date('1900-01-01')))
  .max(new Date(), validationErrors.maxDate(new Date()))

export const registerSchema = z.object({
  firstName: getMinMaxStringSchema(2, 128),
  lastName: getMinMaxStringSchema(2, 128),
  middleName: getMinMaxStringSchema(2, 128).optional(),
  dateOfBirth: dateSchema,
  documentType: documentTypeSchema,
  seriesAndNumber: getMinMaxStringSchema(8, 20),
  issuedDate: dateSchema,
  issuedBy: getMinMaxStringSchema(2, 128),
  phone: requiredStringSchema.regex(/^\+?[0-9]{1,3}-?[0-9]{3,}$/, { message: validationErrors.invalidPhoneNumber }),
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema,
}).refine(ctx => ctx.password === ctx.confirmPassword, {
  message: validationErrors.passwordsNotMatch,
  path: ['confirmPassword'],
})

export type RegisterRequest = z.infer<typeof registerSchema>
