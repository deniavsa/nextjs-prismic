import Prismic from "prismic-javascript";
import { client } from "../prismic-configuration";

import Link from "next/link";

import { RichText, Date } from "prismic-reactjs";

import Layout from "../components/Layout";
import Card from "../components/Card";

// import styles from '../styles/Home.module.css'
//normaly we import the Home css here when we're using css modules

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const BlogHome = ({ home, posts }) => (
  <>
    <Layout>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>
            <h1>Buscando todos posts do blog:</h1>
            <Container maxWidth="lg">
              <Grid container>
                {posts.results.map((post) => (
                  <Grid item key={post.uid} xs={12} sm={6} md={4}>
                    <Card
                      highlighted
                      img={post.data.imagem.url}
                      title={post.data.color}
                      number={post.data.numeros}
                      post={post.uid}
                    />
                    {/* 
                    <p>{post.data.calendar}</p>
                    <p>{post.data.campo_de_texto}</p>
                    <p>{post.data.calendario_e_horas}</p> */}
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  </>
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
