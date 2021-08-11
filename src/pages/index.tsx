import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faStoreAlt,
    faPencilAlt,
    faLaptopCode,
    faFlag,
    faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons'
import "../styles/index.sass"
import "../styles/blog-list.sass"
import {StaticImage} from "gatsby-plugin-image"

function createMarkup(text: string) {
    return {
        __html: text
    };
}

export const query = graphql`
  {
    allSitePage(filter: {context: {type: {eq: "article-detail"}}}) {
      edges {
        node {
          path
          context {
            repository {
              updated
              name
              image
            }
          }
        }
      }
    }
  }
`
type DataProps = {
    allSitePage: {
        edges: [{
            node: {
                path : string;
                context: {
                    repository: {
                        updated: string;
                        name: string;
                        image: string;
                    }
                }
            }
        }]
    }
}

const IndexRoute: React.FC<PageProps<DataProps>> = ({ data }) => (
  <Layout>
    <Seo title={"Hlavní stránka"}/>

    <div className={"index-main"}>
        <img className={"index-main__image"} src={"https://static.vecteezy.com/system/resources/previews/002/354/216/non_2x/man-working-from-home-in-isometric-style-free-vector.jpg"} />

        <div className={"index-main__frame"}>
            <div className={"index-main__title index-main__title--small"}>
                Hi there,
            </div>

            <div className={"index-main__title"}>
                I Am a Freelancer
            </div>

            <div className={"index-main__text"}>
                Welcome to my Portfolio Website.
            </div>

            <button className={"index-main__button"}>
                Download CV
            </button>
        </div>

        <div className={"index-main__frame index-main__frame--bottom"}>
            <div class={"index-main__item"}>
                <h3>Email</h3>
                <a title={"email"} href={"mailto:muller.lukas@mulu.cz"}> muller.lukas@mulu.cz</a>
            </div>
            <div className={"index-main__item"}>
                <h3>Telefon</h3>
                <a title={"telefon"} href={"tel:+4207756277"}>775 627 177</a>
            </div>
            <div className={"index-main__item"}>
                <h3>Lokace</h3>
                <a title={"lokace"} rel={"noopener"} target={"blank"} href={"https://www.google.cz/maps/place/Ostrava/@49.819657,18.0973114,11z/data=!3m1!4b1!4m5!3m4!1s0x4711586a3124e79d:0x891973fb9f9e9144!8m2!3d49.8209226!4d18.2625243"}> Ostrava - Czech Republic</a>
            </div>
        </div>
    </div>

      <div className={"index-block"}>
          <h1>About Me</h1>
      </div>

    <div className={"layout__container"}>
        <div className={"layout__frame"}>
          <h1 className={"index__title"}><span>Ahoj, já jsem</span> Lukáš <br/>Műller.</h1>
          <div className={"index__description"}>
            Jsem vývojář na volné noze a užívám si vytváření nových, neokoukaných věcí.
              Nebojím se nových technologií a výzev. Dbám na potřeby klienta a s porozuměním toho co chce společně
              vytváříme celistvý obraz jeho vize.
          </div>
          <div className={"index__buttons"}>
            <button type={"button"} className={"btn btn--primary"}>Stáhnout CV</button>
            <button type={"button"} className={"btn btn--secondary"}>Kontakt</button>
          </div>
        </div>
        <div className={"layout__frame"}>
            <StaticImage className={"layout__frame__image"} src={"../images/mulu.png"} alt={"profile"}/>
        </div>

        <div className={"index-block"}>
            <h2>What do i do</h2>
        </div>
        <div className={"index-block index-block--content"}>
            <div className={"index-jobs"}>
                <div className={"index-jobs__item"}>
                    <div className={"index-jobs__icon"}>
                        <FontAwesomeIcon icon={faStoreAlt} />
                    </div>
                    <div className={"index-jobs__text"}>
                        <h3>Ecommerce</h3>
                        <span>
                            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.
                        </span>
                    </div>
                </div>
                <div className={"index-jobs__item"}>
                    <div className={"index-jobs__icon"}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </div>
                    <div className={"index-jobs__text"}>
                        <h3>Konzultace</h3>
                        <span>
                            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.
                        </span>
                    </div>
                </div>
                <div className={"index-jobs__item"}>
                    <div className={"index-jobs__icon"}>
                        <FontAwesomeIcon icon={faLaptopCode} />
                    </div>
                    <div className={"index-jobs__text"}>
                        <h3>Programování</h3>
                        <span>
                            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.
                        </span>
                    </div>
                </div>
                <div className={"index-jobs__item"}>
                    <div className={"index-jobs__icon"}>
                        <FontAwesomeIcon icon={faFlag} />
                    </div>
                    <div className={"index-jobs__text"}>
                        <h3>Nastavení procesů</h3>
                        <span>
                            Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className={"index-block"}>
            <h2>Technologie</h2>
        </div>

        <div className={"index-block index-block--content"}>

        </div>


        <div className={"index-block"}>
            <h2>Blog</h2>
        </div>

        <div className={"index-block index-block--content"}>
            <div className={"blog-list"} >
                {data.allSitePage.edges.map (({ node }) => (
                    <div className={"blog-list-item"}>
                    <div className={"blog-list-item__image"} style={{backgroundImage:'url("' + node.context.repository.image  +'")'}}>
                        <Link to={node.path} className={"blog-list-item__mask"} >
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </Link>
                    </div>

                    <div className={"blog-list-item__date"}>
                        {node.context.repository.updated}
                    </div>

                    <Link to={node.path} className={"blog-list-item__title"}>
                        {node.context.repository.name}
                    </Link>
                </div>
                ))}
            </div>
        </div>

      </div>
  </Layout>
)

export default IndexRoute

