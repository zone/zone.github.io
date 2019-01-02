import React from 'react'

import Layout from '../components/Layout'

export default function NotFoundPage() {
  return (
    <Layout title="404 - Not found" description="Sorry this page cannot be found.">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}
