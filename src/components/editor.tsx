import "./editor.css";

export function Editor() {
  return (
    <div class="editor-container">
      <div contentEditable class="editor" spellcheck={false} />
    </div>
  );
}
