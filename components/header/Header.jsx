import Head from 'next/head'

export default function Header({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
        </Head>
    )
}