import Prismic from "prismic-javascript"
import { client } from "../../prismic-configuration"

import { RichText } from "prismic-reactjs"

import Layout from "../../components/Layout";

export default function Post({ data }) {
  return (
    <Layout>

    <h1>Rotas dinamicas</h1>
    <article>
        <img src={data.imagem.url} alt="avatar image"width="150" height="150" />
    </article>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { uid } = params
  const { data } = await client.getByUID("blog_article", uid)
  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  //Pega todas
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "blog_article")
  )

    // console.log(results)

  const paths = results.map(post => ({
    params: {
      uid: post.uid.toString(),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}