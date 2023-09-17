import * as prismic from '@prismicio/client'
const repoName = 'https://fdnd-s13-l1.cdn.prismic.io/api/v2'
export const client = prismic.createClient(repoName)