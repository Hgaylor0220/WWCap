import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = 
        <div>
        <div className="header"><h1>WynoocheeRiver</h1></div>

        <div >
            <img className="Ethan" src="/Ethan.jpg" alt="my image" width="1500" height="300" />
        </div>
        <br />
        <div className="card">
            <ul>
        
                <h2> Description: This river can range from a beautiful friendly class II to a dangerous class V. Class V sections include sieves and continous pushy rapids depending on the flows. </h2>
                <h2> Class : II-V </h2>
                <h2> Run Length : 10.4 miles </h2>
                <h2> Put In : Wynoochee Reservoir , Wynoochee dam , Fish collection Dam , FR 220 Spur </h2>
                <h2> Take Out : Fish collection Dam, FR 220 Spur, Save Creek </h2>
                <h2> Location : Grisdale, Washington </h2>
            
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

export default function Wynoochee() {
    return (
        <Layout content={journalEntry} />

    );
}