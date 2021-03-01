import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"
import Prismic from "prismic-javascript"

export default function Post({ data }) {
  return (
    <React.Fragment>
      <article>
        {/* <header>{RichText.asText(data.title)}</header> */}
        {/* <main>{RichText.asText(data.post_body)}</main> */}
        <img src={data.imagem.url} alt="avatar image"width="150" height="150" />
      </article>
    </React.Fragment>
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
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "blog_article")
  )

    console.log(results)

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