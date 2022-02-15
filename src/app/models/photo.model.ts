export interface Photo {
  id: string,
  description: string | null,
  urls: {
    small: string,
  },
}