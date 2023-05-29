import Head from 'next/head';
import PropTypes from 'prop-types';
import BlogFullwidth from '../../components/blogs/fullwidth';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import { getAllItems } from '../../lib/items-util';

function DefaultBlogPage({ blogs, newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Blogs Fullwidth - OxyBuild</title>
                <meta name="description" content="All Blogs" />
            </Head>
            <Breadcrumb
                subTitle="Our Blog"
                title="FullWidth"
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <BlogFullwidth blogs={blogs} />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('blogs');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            blogs: allItems,
            newsletterItems,
            footerItems,
        },
    };
}

DefaultBlogPage.propTypes = {
    blogs: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default DefaultBlogPage;
