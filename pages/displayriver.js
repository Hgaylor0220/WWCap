import Layout from '../components/Layout';

import River from '../components/River';

const journalEntry = <div><River/>
</div>;

export default function DisplayRiver() {
    return (
        <Layout content={journalEntry} />

    );
}