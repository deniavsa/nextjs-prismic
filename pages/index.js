import Prismic from "prismic-javascript";
import { client } from "../prismic-configuration";

import Link from "next/link";

import { RichText, Date } from "prismic-reactjs";

import Layout from "../components/Layout";

// import styles from '../styles/Home.module.css'
//normaly we import the Home css here when we're using css modules

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

const BlogHome = ({ home, posts }) => (
  <Layout>
    {/* <h1>Buscando Informações de pagina única</h1>

    <h1>{home.data.data}</h1>
    <h1>{home.data.cor}</h1>

    <img
      src={home.data.imagem.url}
      alt="avatar image"
      width="280"
      height="280"
    /> */}
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <h1>Buscando todos posts do blog:</h1>
          <Grid container>
            {posts.results.map((post) => (
              <Grid item key={post.uid}>
                {/* <title>{RichText.render(post.data.title)} | Blog | Deni Dev</title> */}
                {/* <RichText render={post.data.title} /> */}
                <img
                  src={post.data.imagem.url}
                  alt="avatar image"
                  width="150"
                  height="150"
                />
                <p>{post.data.calendar}</p>
                {/* <p>{post.data.campo_de_texto}</p> */}
                <p>{post.data.numeros}</p>
                <p>{post.data.calendario_e_horas}</p>

                <Link href="posts/[id]" as={`/posts/${post.uid}`}>
                  <a>{post.data.color}</a>
                  {/* {RichText.render(post.data.cor)} */}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Layout>
);

export async function getStaticProps() {
  //Função na qual busca apenas pagina unica e armazena na constante home
  const home = await client.getSingle("blog_home");

  //Função que busca varios posts e armazena na constante posts
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_article"),
    { orderings: "[my.post.date desc]" }
  );

  //Passando home e posts para as props da aplicação
  return { props: { home, posts } };
}

export default BlogHome;
