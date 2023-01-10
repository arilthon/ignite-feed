import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";



export function App() { 

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Arilthon Lopes"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sint libero, fugiat ipsum mollitia beatae deserunt architecto repellat quae aspernatur accusamus recusandae temporibus tenetur? Rem sequi labore facere cupiditate veritatis!"
          />
          <Post
            author="Juliana Lopes"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sint libero, fugiat ipsum mollitia beatae deserunt architecto repellat quae aspernatur accusamus recusandae temporibus tenetur? Rem sequi labore facere cupiditate veritatis!"
          />
        </main>
      </div>
    </div>
  );
}

