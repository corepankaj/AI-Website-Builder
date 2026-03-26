import Editor from "@monaco-editor/react";

const CodeBox = ({ code, setCode }) => {
  return (
   
    <div className="h-full rounded-xl overflow-hidden border border-gray-700">
      <Editor
        height="100%"
        defaultLanguage="html"
        value={code}
        theme="vs-dark"
        onChange={(value) => setCode(value)}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          wordWrap: "on",
          autoClosingBrackets: "always",
          autoClosingQuotes: "always",
          formatOnPaste: true,
          formatOnType: true,
        }}
      />
    </div>
   
  );
};

export default CodeBox;