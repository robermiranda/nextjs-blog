import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';


export async function getStaticProps () {
    
    const allPostsData = getSortedPostsData();

    return {
        props : {
            allPostsData
        }
    }
}


export default function Home ({allPostsData}) {
    return (
        <Layout home>
            <Head>{siteTitle}</Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Computer systems developer specialized
                    in Javascript and related technologies.
                </p>
                <p>
                    Do you want to learn how to develop computer systems?
                    Then take our tutorial on
                    {' '}<a href="https://nextjs.org/learn">Next js</a>{' '}
                    where you will learn in just 4 hours
                    what our experts have learned in years of successful career.
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                       {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
            </section>
        </Layout>
    );
}