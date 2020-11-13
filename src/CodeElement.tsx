import React from "react";

type CodeElementProps = { attributes: any };

const CodeElement: React.FC<CodeElementProps> = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

export default CodeElement;
