import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5">
      <h2 className="pt-5">Blog</h2>
      <h3>Difference between javascript and node.js</h3>
      <table className="table bg-dark text-white">
        <tr className="">
          <th className="pt-4 pb-2 ps-3 fs-2">JavaScript</th>
          <th className="pt-4 pb-2 ps-3 fs-2">NodeJS</th>
        </tr>
        <tr className="">
          <td>
            Javascript is programming language that is used for writing scripts
            on th website.
          </td>
          <td>NodeJS is a JavaScript runtime environment.</td>
        </tr>
        <br></br>
        <tr>
          <td>Javascript can only be run in the browsers.</td>
          <td>
            We can run Javascript outside the browser with the help of Node.js
          </td>
        </tr>
        <br></br>
        <tr>
          <td>It is basically used on the client-side.</td>
          <td>It is mostly used on the server-side</td>
        </tr>
        <br></br>
        <tr>
          <td>
            Javascript can run in any browser engine as like JS core in safari
            and Spidermonkey in Firefox.{" "}
          </td>
          <td>
            V8 is the Javascript engine inside of node.js that parses and runs
            Javascript.{" "}
          </td>
        </tr>
        <br></br>
        <tr>
          <td>Javascript is used in frontend development.</td>
          <td>Nodejs is used in server-side development.</td>
        </tr>
      </table>
      <h3>When should you use nodejs and when should you use mongodb</h3>
      <p>
        MongoDB and NodeJS are two different technologies. MonogDB is a database
        system which gives you a chance to efficiently store documents in a
        database and to perform operations like data updates, or to search
        documents by some criterias. NodeJS's responsibilty is especially to
        execute your application.
      </p>
      <h3>Differences between sql and nosql databases.</h3>
      <table className="bg-dark text-white table">
          <tr>
              <th className="pt-4 pb-2 ps-3 fs-2">SQL</th>
              <th className="pt-4 pb-2 ps-3 fs-2">NoSQL</th>
          </tr>
          <tr>
              <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
              <td>Non-relational or distributed database system.</td>
          </tr>
          <br />
          <tr>
              <td>These databases have fixed or static or predefined schema</td>
              <td>They have dynamic schema</td>
          </tr>
          <br />
          <tr>
              <td>These databases are not suited for hierarchical data storage.</td>
              <td>These databases are best suited for hierarchical data storage.</td>
          </tr>
          <br />
          <tr>
              <td>These databases are best suited for complex queries</td>
              <td>These databases are not so good for complex queries</td>
          </tr>
          <br />
          <tr>
              <td>Vertically Scalable</td>
              <td>	Horizontally scalable</td>
          </tr>
          <br />
          <tr>
              <td>Follows ACID property</td>
              <td>Follows CAP(consistency, availability, partition tolerance)</td>
          </tr>
      </table>
      <h2>Stack overflow Question</h2>
      <h3>https://stackoverflow.com/questions/72339189/netlify-hosting-main-rule-how-can-i-do-it</h3>
    </div>
  );
};

export default Blog;
