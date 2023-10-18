import { Inter } from "next/font/google";

import Layout from "@/components/Layout";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const inter = Inter({ subsets: ["latin"] });

export default function Staff() {
  return (
    <>
      <Layout>
        <section id="hero" className="">
          <h1 className="title has-text-centered has-background-black has-text-white p-2 mb-2 mt-2 is-rounded">
            Under construction coming soon!
          </h1>
        </section>
      </Layout>
    </>
  );
}
