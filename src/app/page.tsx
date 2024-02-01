'use serve'
import { List, ListItem, Typography, Container } from "@mui/material";
import ListaDePosts from "@/components/lista";

const posts = async () =>{
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

const Home = async () => {

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Posts
      </Typography>
      <List>
        {(await posts()).map((post: any) => (
          <ListaDePosts
            id={post.id}
            title={post.title}
            key={post.id}
          ></ListaDePosts>
        ))}
      </List>
    </Container>
  );
};

export default Home;
