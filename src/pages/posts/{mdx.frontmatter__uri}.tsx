"use client"
import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"
//import { useTina } from "tinacms/dist/react"

const BlogPost = ({ data, children }) => {
  // Requires TinaCMS Client
  // const { data: tinaData } = useTina({
  //   query: `
  //   query ($title: String) {
  //     post (relativePath: $title) {
  //       body
  //     }
  //   }
  // `,
  //   variables: {
  //     title: "Testing-Post-in-Rules-Content-Repo.mdx",
  //   },
  //   data: { title: "no title" },
  // })

  return (
    <Layout>
      <h1>Gatsby {data.mdx.frontmatter.title}</h1>
      {children}
    </Layout>
  )
}

//A Gatsby page query
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        uri
      }
    }
  }
`

export const Head = () => (
  <Seo title="Cool title" description={undefined} children={undefined} />
)

export default BlogPost
