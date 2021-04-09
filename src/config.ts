export default interface CookieConfig {
  name: string,
  value: string | null | undefined,
  path: string | null | undefined,
  expires: Date | null | undefined,
}