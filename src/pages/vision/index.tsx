import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/util/intersection";
import { visions } from "@/data/vision";

const inter = Inter({ subsets: ["latin"] });

export default function Visions() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {});
  useIntersectionObserver();
  return (
    <>
      <Layout>
        <section id="hero" className="">
          <h1 className="title has-text-centered has-background-black has-text-white p-2 mb-2 mt-2 is-rounded">
            Our Vision
          </h1>
        </section>
        <div className="columns is-flex-wrap-wrap">
          {visions.map((vision, i) => (
            <div
              key={i}
              ref={ref}
              className={`column message is-black is-three-fifths-tablet mb-4 mx-auto animate-${
                i % 2 == 0 ? "left" : "right"
              }`}
            >
              <div className="message-header">
                <p className="">{`${vision.header} `}</p>
              </div>
              <div className="message-body">{vision.body}</div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
