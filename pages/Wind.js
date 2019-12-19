import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div>
    <div className="header"><h1>Wind </h1></div>

    <div >
        <img className="Ethan" src="/Ethan.jpg" alt="my image" width="1500" height="300" />
    </div>
    <br />
    <div className="card">
        <ul>
            <h2> Description If you are a advanced boater looking for some continuous technical rapids with some manditory must make moves,surround by lavish green foresty, the Upper Wind is for you. Not recommended for a class III boater. The Wind can be ran anywhere from 300-2500 cfs</h2> 
            <h2>Class IV-V,</h2 >
            <h2>RunLength 6 miles, </h2>
            <h2>PutIn Stabler, trout Creek, </h2>
            <h2>TakeOut From the Wind River high way turn left on to High bridge road and make your first right onto Old Detour Road. Follow the dirt road down to the river., </h2>
            <h2>Location Carson, Washington</h2>

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

export default function Wind() {
    return (
        <Layout content={journalEntry} />

    );
}