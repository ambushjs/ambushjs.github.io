import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures/index.jsx';
import HomepageHeader from '@site/src/components/HomepageHeader/index.jsx';
import styles from './styles.module.css';

export default function Home() {
    return (
        <Layout title="Home" description="Official documentation of Ambush">
            <main className={styles.main}>
                <HomepageHeader />
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
