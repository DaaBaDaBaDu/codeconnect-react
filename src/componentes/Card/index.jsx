import Capa from "./assets/capa.png";
import Usuario from "./assets/usuario.png";
import Code from "./assets/code.svg";
import Share from "./assets/share.svg";
import Chat from "./assets/chat.svg";
import "./styles.css";

export default function Card() {
  return (
    <>
      <article className="card">
        <div className="card__imagem">
          <img src={Capa} alt="imagem do post" />
        </div>
        <div className="card__conteudo">
          <div className="conteudo__texto">
            <h3>Titulo do post em duas linhas</h3>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint.
            </p>
          </div>

          <div className="conteudo__rodape">
            <ul>
              <li>
                <img src={Code} alt="código" />
                100
              </li>
              <li>
                <img src={Share} alt="compartilhamentos" />
                12
              </li>
              <li>
                <img src={Chat} alt="comentários" />
                10
              </li>
            </ul>

            <div className="rodape__usuario">
              <img src={Usuario} alt="Usuário" />
              @julio
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
