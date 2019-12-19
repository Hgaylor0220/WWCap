import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <ul>
        <h2>North Santiam</h2>
            <h2>Description: This run can be split up into three runs. The rapids range from class II-V. The upper section, big cliff dam to packsaddle are considered class III-V, packsaddle down to Mill City falls(very small waterfall) for class II-III and Mill City to Mehama for class II on.</h2>  
            <h2>Class: II-V</h2> 
            <h2>RunLength: 21.2 miles </h2>
            <h2>PutIn: Big Cliff Dam, Pack Saddle, Mill City, Mehama</h2>
            <h2>TakeOut: Pack Saddle, Mill City, Mehama </h2>
            <h2>Location: Mill City, Oregon</h2>

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