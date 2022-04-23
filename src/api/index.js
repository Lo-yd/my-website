import { http } from "@/utils"

export const getA = () => {
  return http({
    url: '/wp/v2/posts',
    method: 'get'
  })
}