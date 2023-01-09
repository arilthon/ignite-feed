import { Header } from "./components/Header";
import { Post } from "./Post"
import "./global.css"

export function App() { 

  return (
    <div>
      <Header/>
      <Post
        author="Arilthon Lopes"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sint libero, fugiat ipsum mollitia beatae deserunt architecto repellat quae aspernatur accusamus recusandae temporibus tenetur? Rem sequi labore facere cupiditate veritatis!"
      />
      <Post
        author="Juliana Lopes"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sint libero, fugiat ipsum mollitia beatae deserunt architecto repellat quae aspernatur accusamus recusandae temporibus tenetur? Rem sequi labore facere cupiditate veritatis!"
      />
    </div>
  );
}

