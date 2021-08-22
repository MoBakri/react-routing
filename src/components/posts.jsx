import React from "react";

const Posts = ({ match }) => {
  return (
    <div>
      <h1>Posts</h1>
      <h3>
        year :{match.params.year} , month : {match.params.month}
      </h3>
    </div>
  );
};
export default Posts;
