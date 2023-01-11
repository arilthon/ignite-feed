import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/arilthon.png"
          />
          <div className={styles.authorInfo}>
            <strong>Arilthon Lopes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Janeiro ás 14:22" dateTime="2023-01-11 14-23-00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É umprojeto que fiz no
          NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 {' '} <a href=""> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> {' '} 
          <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}