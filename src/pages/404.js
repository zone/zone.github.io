import React from 'react'

import Content from '../components/Content'
import Layout from '../components/Layout'

export default function NotFoundPage() {
  return (
    <Layout
      title="404 - Not found"
      description="Sorry this page cannot be found."
    >
      <Content>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Content>
    </Layout>
  )
}
