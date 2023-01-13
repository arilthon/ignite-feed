import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/arilthon.png",
      name: "Arilthon Lopes",
      role: "Programador",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É umprojeto que fiz noNLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-11 15:45:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Juliana.png",
      name: "Juliana Lopes",
      role: "Educator",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É umprojeto que fiz noNLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-10 18:30:00"),
  },
];



export function App() { 

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => {              
            return ( 
              <Post                
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt} 
              />              
            )
          })}          
        </main>
      </div>
    </div>
  );
}

