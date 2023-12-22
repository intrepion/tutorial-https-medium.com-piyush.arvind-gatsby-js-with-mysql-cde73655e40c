import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => {

  const data = useStaticQuery(
    graphql`
      query {
        allMysqlCustomers {
          edges {
            node {
              CustomerID
              CompanyName
              ContactName
              ContactTitle
              Address
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Customer ID</th>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th>Contact Address</th>
          </tr>
        </thead>
        <tbody>
          {data.allMysqlCustomers.edges.map(({ node }, index) =>
          (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{node.CustomerID}</td>
              <td>{node.CompanyName}</td>
              <td>{node.ContactName}</td>
              <td>{node.ContactTitle}</td>
              <td>{node.Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export const Head = () => <Seo title="Page two" />

export default SecondPage
