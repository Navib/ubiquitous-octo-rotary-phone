import React from "react";
import List from "../containers/List";
import Form from "./Form";
import Post from "../containers/Posts";
import styles from "./app.module.css";
import sass from "./app.module.scss";

const App = () => (
  <>
    <div>
      <h2 className={styles.colorRed}>Articles</h2>
      <div className={sass.purpleFw}>
        <div className="one">Purple</div>
        <div className="two">Green</div>
      </div>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div>
      <h2>API posts</h2>
      <Post />
    </div>
  </>
);

export default App;
