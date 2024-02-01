// pages/index.js
import Link from "next/link";
import { List, ListItem, Typography, Container, IconButton, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface PostParams {
  params: {
    id: string;
  };
}

const posts = async (id: string) => {
  try {
     const response = await fetch(
       `https://jsonplaceholder.typicode.com/posts/${id}`
     );
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

const Home = async ({ params }: PostParams) => {
  const post = await posts(params.id);
  return (
    <Container maxWidth="sm">
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item>
          <Link href="/" passHref>
            <IconButton aria-label="Voltar" component="a" color="info">
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom>
            Detalhes do Post
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <Typography>{post.body}</Typography>
    </Container>
  );
};

export default Home;
