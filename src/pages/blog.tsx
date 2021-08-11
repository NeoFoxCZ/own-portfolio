import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";


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

const Blog: React.FC<PageProps<DataProps>> = ({ data, path }) => (
    <Layout>
        <Seo title="Blog" description={"Seznam příspěvků na blogu."} />
        <div className={"layout__container"}>
            <div className={"blog-list"}>
            {data.allSitePage.edges.map (({ node }) => (
                <div className={"blog-list-item"}>
                    <div className={"blog-list-item__image"}>
                        <img src={node.context.repository.image} alt={node.context.repository.name}/>
                        <Link to={node.path} className={"blog-list-item__mask"} >
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </Link>
                    </div>

                    <div className={"blog-list-item__date"}>
                        10.1.2012
                    </div>

                    <Link to={node.path} className={"blog-list-item__title"}>
                        {node.context.repository.name}
                    </Link>
                </div>
            ))}
        </div>
        </div>
    </Layout>
)

export default Blog

