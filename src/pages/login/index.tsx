import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/util/intersection";
import LoginForm from "./LoginForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <Layout>
        <section id="hero" className="">
          <h1 className="title has-text-centered has-background-black has-text-white p-2 mb-2 mt-2 is-rounded">
            Log in
          </h1>
        </section>
        <div className="box ">
          <GoogleReCaptchaProvider
            reCaptchaKey="6LeYvV8oAAAAAIylSQYi58MmckyM6xBSNrED-nQW"
            scriptProps={{
              async: false,
              defer: false,
              appendTo: "head",
              nonce: undefined,
            }}
          >
            <LoginForm />
          </GoogleReCaptchaProvider>
        </div>
      </Layout>
    </>
  );
}
