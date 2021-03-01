
import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import { client } from '../prismic-configuration'

const BlogHome = ({ home }) => (
  <div>
    <h1>Buscando Informações da API do prismic:</h1>
    {/* <img src={home.data.image.url} alt="avatar image" /> */}
    <h1>{home.data.data}</h1>
    <p>{home.data.cor}</p>
  </div>
)

export async function getServerSideProps() {
  const home = await client.getSingle('blog_home')
  
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_article"),
    { orderings: "[my.post.date desc]" }
  )

  console.log(posts)

  return { props: { home } }
}

export default BlogHome
