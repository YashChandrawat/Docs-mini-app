import { useRef } from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Hello this is new Docs mini app created using Framer Motion",
      fileSize: "0.9 MB",
      close: false,
      tag: { isOpen: true, tagTitle: "DOWNLOAD NOW...", tagColor: "green" },
    },
    {
      desc: "A fascinating exploration of deep-sea creatures using AR technology",
      fileSize: "1.5 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "UPLOAD", tagColor: "blue" },
    },
    {
      desc: "Exciting new game development tutorial series for beginners",
      fileSize: "1.2 MB",
      close: false,
      tag: { isOpen: true, tagTitle: "DOWNLOAD NOW...", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed w-full h-full  top-0 left-0 z-[3] flex gap-4 p-5"
    >
      {data.map((item, index) => (
        <Cards data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
