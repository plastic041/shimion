import "./editor.css";
import { createSignal } from "solid-js";

const [content, setContent] = createSignal("");

export function Editor() {
  return (
    <div class="editor-container">
      <textarea
        spellcheck={false}
        class="editor"
        value={content()}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}
