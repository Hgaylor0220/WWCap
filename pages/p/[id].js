import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import RiverList from '../../components/RiversList';
import River from '../../components/River';

function Match(){

}
export default function Post() {
    
    
    const router = useRouter();
    
    console.log(<RiverList>masterRiverList.map((river, Name)
             )</RiverList>);
    const userRiverChoice = router.query.id; 
    
    const riverReview = 
    
    <div>
        <h1>{router.query.id}</h1>   
        
            
     

        <p>This will have the river post info.</p>
    
        
        </div>

    return (
        <Layout content={riverReview} />

    );
}
