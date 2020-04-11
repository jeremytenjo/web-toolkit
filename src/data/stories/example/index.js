import React from "react";

import generateStubs from "./data/users/stubs";

export default () => {
  const example = async () => {
    const stubs = await generateStubs;

    console.log({ stubs });
  };

  example();
  return <div>Data Example</div>;
}