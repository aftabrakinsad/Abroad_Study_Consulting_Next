import Head from "next/head";

export default function MyHeader({ title }) {
    return (
        <Head>
            <title>{title ? `${title} | Abroad Study` : 'Abroad Study'}</title>
        </Head>
    )
}
