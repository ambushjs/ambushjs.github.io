import styles from './styles.module.css';

export default function HomepageHeader() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.center}><h1 className={styles.heading}>Streamline with Ambush.</h1></div>
                <div className={`${styles.center} ${styles.mt}`}><p style={{ fontSize: '16px', width: '45em' }}>Ambush is a minimal library that brings plenty of handy utilities to your code. Ambush prioritizes performance and is tailored to enhance your development experience while keeping things lean and efficient.</p></div>

                <div className={styles.center}>
                    <button className={`${styles.mt} ${styles.button}`} onClick={() => navigator.clipboard.writeText('npm install ambush')}>
                        <span style={{ color: '#ff2424' }}>&gt;</span>
                        <span>npm install ambush</span>

                        <svg stroke="#000" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
