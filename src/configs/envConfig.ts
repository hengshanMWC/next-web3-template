const web3ProjectId = process.env.NEXT_PUBLIC_WBE3_PROJECT_ID
const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL
if (!web3ProjectId) {
  throw new Error('NEXT_PUBLIC_WBE3_PROJECT_ID is not defined')
}
if (!websiteUrl) {
  throw new Error('NEXT_PUBLIC_WEBSITE_URL is not defined')
}

const envConfig = {
  web3ProjectId,
  websiteUrl,
}
export { envConfig }
