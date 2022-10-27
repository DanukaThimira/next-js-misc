import Head from "next/head";

function BlogId({ title, description}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <h1>Article</h1>
            
        </div>
    )
}

export default BlogId

export async function getServerSideProps(){
    const DB_USER = process.env.DB_USER;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    console.log(DB_USER + '' + DB_PASSWORD + ' 🚀')
    return {
        props: {
            title: 'Article Title',
            description: 'Article Description',
        },
    }
}