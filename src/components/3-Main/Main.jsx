import { useState } from "react";
import "./main.css";
import { myProjects } from "./MyProject";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const zzz = item.category.filter((myItem) => myItem === buttonCategory);
      return zzz.length > 0;
    });
    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          key="all"
          onClick={() => {
            setActive("all");
            setArr(myProjects);
          }}
          className={active === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          key="css"
          onClick={() => handleClick("css")}
          className={active === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          key="js"
          onClick={() => handleClick("js")}
          className={active === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          key="react"
          onClick={() => handleClick("react")}
          className={active === "react" ? "active" : null}
        >
          React
        </button>
        <button
          key="node"
          onClick={() => handleClick("node")}
          className={active === "node" ? "active" : null}
        >
          Node & 
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              key={item.projectTitle}
              className="card"
            >
              <img width={266} src={item.imgPath} alt={item.projectTitle} />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="subtitle">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellendus, dignissimos. Eligendi omnis harum dolores
                  deserunt velit, tenetur qui. Recusandae, nostrum?
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="icon-link"></a>
                    <a href={item.github} target="_blank" rel="noopener noreferrer" className="icon-github"></a>
                  </div>
                  <a className="link flex" href="#">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;