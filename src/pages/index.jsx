import Head from "next/head";
import About from "./about";

// import labels from "../../labels.json";
// import styles from "../styles/Home.module.css";
// import data from "../../data";

export default function Home() {
  // console.log(JSON.parse(labels));

  return (
    <div>
      <Head>
        <title>edekee</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="apple-touch-icon" href="/edekee_favicon.svg" /> */}
        <link rel="apple-touch-icon" sizes="57x57" href="/57x57.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/114x114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/72x72.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/144x144.png"></link>
        <link rel="icon" href="/edekee_favicon.svg" />
      </Head>

      <main>
        <About />
      </main>
    </div>
  );
}
