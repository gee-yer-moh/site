import styles from './style.module.css';

export default function Footer() {
    return <div className={styles.links}>
            <a className="b3" href="https://www.x.com/gee_yer_moh/" target="_blank">@gee_yer_moh</a>
            <a className="b3" href="https://github.com/gee-yer-moh" target="_blank">github</a>
            <a className="b3" href="https://www.linkedin.com/in/gee-yer-moh/" target="_blank">linkedin</a>
            <a className="b3" href="mailto:jga2131@columbia.edu" target="_blank">email</a>
    </div>;
}