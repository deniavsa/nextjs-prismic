import Prismic from 'prismic-javascript'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here

export const apiEndpoint = 'https://deniavsa2test.prismic.io/api/v2'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

// -- Link resolution rules
// Manages links to internal Prismic documents
// Modify as your project grows to handle any new routes you've made
export const linkResolver = (doc) => {
  if (doc.type === 'post') {
    return `/blog/${doc.uid}`
  }
  return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === 'post') {
    return `/post?uid=${doc.uid}`
  }
  return '/'
}

// -- Client method to query Prismic
// Connects to the given repository to facilitate data queries
export const client = Prismic.client(apiEndpoint, { accessToken })
