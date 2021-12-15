import Head from "next/head";
import NavBar from '../components/NavBar';
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
                <h1>AiR</h1>
                <NavBar />
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;