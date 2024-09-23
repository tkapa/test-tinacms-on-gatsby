import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql, Link } from "gatsby"

const PostsPage = ({ data }) => {
  return (
    <Layout>
      <ul>
        {data.allMdx.nodes.map(node => (
          <li key={node.frontmatter?.title}>
            <Link to={`/posts/${node.frontmatter?.uri?.toLowerCase()}`}>
              {node.frontmatter?.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query PostsQuery {
    allMdx {
      nodes {
        frontmatter {
          title
          uri
        }
      }
    }
  }
`

export const Head = () => (
  <Seo title="Posts" description={undefined} children={undefined} />
)

export default PostsPage
