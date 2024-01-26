type Insertion = {
  id: "insertion";
  text: string;
  cursorPosition: number;
};

type Deletion = {
  id: "deletion";
  text: string;
  cursorPosition: number;
};

type Diff = {
  cursorPosition: number;
  type: Insertion | Deletion;
};

export function applyDiff(text: string, diff: Diff): string {
  const { cursorPosition, type } = diff;
  const { text: diffText } = type;

  if (type.id === "insertion") {
    return (
      text.slice(0, cursorPosition) + diffText + text.slice(cursorPosition)
    );
  }

  if (type.id === "deletion") {
    return (
      text.slice(0, cursorPosition) +
      text.slice(cursorPosition + diffText.length)
    );
  }

  return text;
}
