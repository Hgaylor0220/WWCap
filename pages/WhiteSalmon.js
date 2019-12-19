import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1> White Salmon </h1></div>

    <div >
        <img className="Ethan" src="/WhiteSalmon.webp" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
        <ul>
            <h3> Description Beauftiful river that is surrounded by lavish forest and crystal blue water. This river can be run year around. There are great play boat features, waterfalls, and pool drops. This run can be enjoyed by raft, kayaking and canoes. If you want to have a stress free family trip commercial runs are permited on this run </h3>
            <h3>Class II- IV</h3> 
            <h3>Run Length 8 miles </h3> 
            <h3>Put In BZ Corner, Husem Falls</h3>  
            <h3>Take Out Husum Falls, Northwestern Park</h3>
            <h3>Location White Salmon, Washington</h3> 

    </ul>
</div>
    <style jsx>{`
        
        .header {
            text-align: center;
            border: 20px;
            padding: 20px;
            margin: 20px;
            width: auto;
            height: auto;
            border: 10px solid white;
            box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
           
        }

     .Ethan {
        maxwidth: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: auto;
        border:10px solid black;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        
    }
            h2 {
                
                width: auto;
                height: auto;
                padding: 50px;
                border: 1px solid white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                color::#556B2F;
            }
        

        
        
      `}</style>
</div>;

export default function clackamasUpper() {
    return (
        <Layout content={journalEntry} />

    );
}