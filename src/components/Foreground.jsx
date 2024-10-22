import { useRef } from "react";
import Cards from "./Cards";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nostrum.",
      filesize: "0.8Mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nostrum.",
      filesize: "0.8Mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nostrum.",
      filesize: "0.8Mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="h-full w-full fixed top-0 left-0 z-[3] flex flex-wrap justify-center gap-4 p-3 sm:gap-5 sm:p-5 lg:gap-6 lg:p-10"
    >
      {data.map((item, index) => (
        <Cards key={index} data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
