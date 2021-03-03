import Prismic from 'prismic-javascript'
import { client } from '../prismic-configuration'

import { RichText, Date } from 'prismic-reactjs'

import Link from "next/link"

import { Button } from '@material-ui/core'

const BlogHome = ({ home, posts }) => (
  <div>
    <Button variant="contained" color="primary">Hello</Button>
    <h1>Buscando Informações de pagina única</h1>

    <h1>{home.data.data}</h1> 
    <h1>{home.data.cor}</h1>   

    <img src={home.data.imagem.url} alt="avatar image"width="280" height="280" />

    <h1>Buscando Informações de varios posts</h1>
    <ul>
        
        {posts.results.map((post) => (

          <li key={post.uid}>

            <img src={post.data.imagem.url} alt="avatar image"width="150" height="150" />

            <Link href="posts/[id]" as={`/posts/${post.uid}`}>
              <a>{home.data.cor}</a> 
            </Link>

          </li>

        ))}
      </ul>
  </div>
)

export async function getStaticProps() {

  //Função na qual busca apenas pagina unica e armazena na constante home
  const home = await client.getSingle('blog_home')

  //Função que busca varios posts e armazena na constante posts
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_article"),
    { orderings: "[my.post.date desc]" }
  )

  //Passando home e posts para as props da aplicação 
  return { props: { home, posts } }
}

export default BlogHome
