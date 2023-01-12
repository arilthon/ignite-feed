import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css"

export function Comment() {
    return (
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/arilthon.png" alt="" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Arilthon Lopes</strong>
                <time
                  title="11 de Janeiro ás 14:22"
                  dateTime="2023-01-11 14-23-00"
                >
                  Publicado há 1h
                </time>
              </div>

              <button title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>

            <p>Muito bom Devon, parabéns!! </p>
          </div>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    );
}