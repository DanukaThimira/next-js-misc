import Footer from '../components/Footer'
import Head from 'next/head'

function About() {
  return (
    <>
    <Head>
      <title>About</title>
      <meta name="description" content="About Section" />
    </Head>
    <div className="about">About</div>
    </>
  )
}

export default About

About.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}