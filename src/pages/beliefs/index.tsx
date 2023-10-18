import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useIntersectionObserver } from "@/util/intersection";
import { beliefs } from "@/data/belief";

const inter = Inter({ subsets: ["latin"] });

export default function Beliefs() {
  useIntersectionObserver();
  return (
    <>
      <Layout>
        <section id="hero" className="">
          <h1 className="title has-text-centered has-background-black has-text-white p-2 mb-2 mt-2 is-rounded">
            What We Believe
          </h1>
        </section>
        <div className="container">
          {beliefs.map((belief, i) => (
            <div
              key={i}
              className={`box is-black mb-4 animate-bottom mx-auto`}
              style={{ maxWidth: "800px" }}
            >
              {belief}
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
