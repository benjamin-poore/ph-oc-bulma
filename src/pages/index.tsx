import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faTrash } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <section>
          <Image
            src="/front.png"
            alt="logo"
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
        </section>

        <section id="welcome" className="container box">
          <h1 className="title has-text-centered has-background-black has-text-white p-2 mb-2 is-rounded">
            Welcome!
          </h1>
          <p className="has-text-centered">All Are Welcome</p>
          <div className="column message is-black is-two-thirds-tablet mx-auto mb-0">
            <div className="message-header mx-auto">
              <p className="mx-auto">Spreading the Gospel</p>
            </div>
            <div className="message-body">
              The Potter&apos;s House Christian Church enthusiastically follows
              Jesus&apos; words to share the Gospel with the world. We&apos;re a
              local church making a big difference by sharing the life-changing
              message of Jesus Christ. Come be a part of it!
            </div>
          </div>
          <div className="columns is-desktop has-text-centered">
            <div className="column tag is-info is-large m-2">
              Changing Lives
            </div>
            <div className="column tag is-info is-large m-2">
              Making Disciples
            </div>
            <div className="column tag is-info is-large m-2">
              Changing the World
            </div>
          </div>
        </section>

        <section id="location" className="container box">
          <div className="column message is-black is-two-thirds-tablet mx-auto mb-0">
            <div className="message-header mx-auto">
              <p className="mx-auto">Service Times &amp; Location</p>
            </div>
            <div className="message-body flex has-text-centered">
              <div>
                <span className="has-text-weight-bold has-text-info is-size-4">
                  Sunday Morning:
                </span>
                <span className="has-text-weight-bold "> 11:00 AM</span>
              </div>

              <div>
                <span className="has-text-weight-bold has-text-info is-size-4">
                  Sunday Evening:
                </span>
                <span className="has-text-weight-bold "> 6:30 PM</span>
              </div>

              <div>
                <span className="has-text-weight-bold has-text-info is-size-4">
                  Wednesday:
                </span>
                <span className="has-text-weight-bold "> 7:00 PM</span>
              </div>

              <div>
                <address className="notification is-info">
                  19146 Molalla Ave suite A, Oregon City, OR 97045
                </address>
                <iframe
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCcCLUCP8E4lwvfqSPE6SAMa2nachzV6j0&q=19146+Molalla+Ave+A+Oregon+City,+OR+97045&zoom=17
                "
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
