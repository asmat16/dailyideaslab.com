import type { Block } from "@/lib/ideas";

export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose">
      {blocks.map((block, index) => {
        if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
        if (block.type === "quote") return <blockquote key={index}>{block.text}</blockquote>;
        if (block.type === "ol") {
          return (
            <ol key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          );
        }
        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}
