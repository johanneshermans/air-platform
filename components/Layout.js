import Head from "next/head";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>AiR platform</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
            </Head>

            <header>
                <h1 className={styles.none}>AiR</h1>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;