import css from "./styles.module.css";

function Comments() {
  return (
    <article>
      <h1 className={css.title}>
        Faça um comentário sobre o que achou do site.
      </h1>
      <form method="/post" action="/">
        <div className={css.dados}>
          <label>Nome:</label>
          <input type="text" name="nome" required />
        </div>
        <div className={css.dados}>
          <label>Mensagem:</label>
          <input type="text" name="nome" required />
        </div>
        <div>
          <button>Enviar</button>
        </div>
      </form>
    </article>
  );
}
export { Comments };
