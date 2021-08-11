import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/blog-detail.sass"

type DataProps = {
  readonly pageContext: {
  repository: {
      body: string;
      name: string;
      description: string;
      seoDescription: string;
      seoTitle: string;
      image: string;
      updated: string;
    }
}
}

function createMarkup(text: string) {
  return {
    __html: text
  };
}

export const query = graphql`
  {
    sitePage {
      id
      context {
        repository {
          body
          name
          description
          image
          seoDescription
          seoTitle 
          updated
        }
      }
    }
  }
`

const ArticleDetail = ({ pageContext }: DataProps) => (
  <Layout>
      <Seo title={pageContext.repository.seoTitle}
           description={pageContext.repository.seoDescription}
           image={pageContext.repository.image}
      />
      <div className={"layout__container blog-detail    "}>
        <h1 dangerouslySetInnerHTML={createMarkup(pageContext.repository.name)}/>
        <div dangerouslySetInnerHTML={createMarkup(pageContext.repository.description)}/>
        <div dangerouslySetInnerHTML={createMarkup(pageContext.repository.body)}/>
      </div>
  </Layout>
)

export default ArticleDetail

