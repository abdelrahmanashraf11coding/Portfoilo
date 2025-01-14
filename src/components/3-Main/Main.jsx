import { useState } from "react";
import "./main.css";
import { myProjects } from "./MyProject";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const [selectedImage, setSelectedImage] = useState(null); // حالة لتتبع الصورة المحددة

  const handleClick = (buttonCategory) => {
    setActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const zzz = item.category.filter((myItem) => myItem === buttonCategory);
      return zzz.length > 0;
    });
    setArr(newArr);
  };

  const openImage = (imgPath) => {
    setSelectedImage(imgPath); // تعيين الصورة المحددة
  };

  const closeImage = () => {
    setSelectedImage(null); // إغلاق الصورة
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
          Node & Express
        </button>
        <button
          key="graphic-design"
          onClick={() => handleClick("Graphic Design")}
          className={active === "Graphic Design" ? "active" : null}
        >
          Graphic Design
        </button>
        <button
          key="motion-graphics"
          onClick={() => handleClick("Motion Graphics")}
          className={active === "Motion Graphics" ? "active" : null}
        >
          Motion Graphics
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
              {item.category.includes("Motion Graphics") ? (
                // عرض الفيديو لـ Motion Graphics
                <div className="video-container custom-size">
                  <video controls width="100%" poster={item.posterPath}>
                    <source src={item.videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : item.category.includes("Graphic Design") ? (
                // عرض الصورة فقط لـ Graphic Design
                <div onClick={() => openImage(item.imgPath)}>
                  <img
                    src={item.imgPath}
                    alt={item.projectTitle}
                    className="graphic-design-image"
                  />
                </div>
              ) : (
                // عرض البطاقة كاملة للمشاريع الأخرى
                <>
                  <img
                    width={266}
                    src={item.imgPath}
                    alt={item.projectTitle}
                    className="project-image"
                  />
                  <div style={{ width: "266px" }} className="box">
                    <h1 className="title">{item.projectTitle}</h1>
                    <p className="subtitle">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repellendus, dignissimos. Eligendi omnis harum dolores
                      deserunt velit, tenetur qui. Recusandae, nostrum?
                    </p>
                    <div className="flex icons">
                      <div style={{ gap: "11px" }} className="flex">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-link"
                        ></a>
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-github"
                        ></a>
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
                </>
              )}
            </motion.article>
          ))}
        </AnimatePresence>
      </section>

      {/* نافذة عرض الصورة */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="image-container"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="full-size-image"
              />
              <motion.button
                onClick={closeImage}
                className="close-button"
                whileHover={{ scale: 1.1 }} // تأثير hover
                whileTap={{ scale: 0.9 }} // تأثير عند النقر
              >
                X
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Main;