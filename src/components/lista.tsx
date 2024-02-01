'use client'
import Link from "next/link";
import { ListItem, Typography } from "@mui/material";

function ListaDePosts ({id, title}:{id:string, title:string}) {
  return (
    <Link key={id} href={`/${id}`} passHref>
      <ListItem
        component="a"
        sx={{
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
      >
        <Typography variant="subtitle1">{title}</Typography>
      </ListItem>
    </Link>
  )
};

export default ListaDePosts
