import Layout from '../components/Layout';
import Link from 'next/link';

const board = <div><h1>Updates here!</h1>
</div>;

export default function MessageBoard() {
    return (
        <Layout content={board} />

    );
}