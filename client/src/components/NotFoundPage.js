import React from "react";

const NotFoundPage = props => {
  return (
    <main>
      <h1>404 Page Not Found</h1>
      <p>
        <strong>{window.location.href}</strong> doesn't exist
      </p>
    </main>
  );
};

export default NotFoundPage;