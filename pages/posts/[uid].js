import Prismic from "prismic-javascript";
import { client } from "../../prismic-configuration";

import { RichText } from "prismic-reactjs";

import Layout from "../../components/Layout";
import Link from "next/link";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root:{

  }
}));

export default function Post({ data }) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Layout>
      <Link href="/">
        <a>Voltar para home</a>
      </Link>

      <Container maxWidth="lg">
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <h1>Cada post sendo renderizado:</h1>
            <h2>{`${router.query.uid}`}</h2>

            <article>
              <img
                src={data.imagem.url}
                alt="avatar image"
                width="150"
                height="150"
              />
              {/* <p>{data.data.calendar}</p> */}
              {/* <p>{post.data.campo_de_texto}</p> */}
              {/* <p>{data.data.numeros}</p> */}
              {/* <p>{data.data.calendario_e_horas}</p> */}
            </article>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { uid } = params;
  const { data } = await client.getByUID("blog_article", uid);
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  //Pega todas
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "blog_article")
  );

  // console.log(results)

  const paths = results.map((post) => ({
    params: {
      uid: post.uid.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
