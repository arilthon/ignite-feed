export function Post({ content, author }) {
    return (
      <div>
        <strong>{author}</strong>
        <p>{content}</p>
      </div>
    );
}

