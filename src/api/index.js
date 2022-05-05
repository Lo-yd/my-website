import { http } from "@/utils"

export const reqGetArticleList = params => {
  return http({
    url: '/wp/v2/posts',
    method: 'get',
    params
  })
}