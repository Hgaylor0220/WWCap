import Layout from '../components/Layout';
import Link from 'next/link';


        
       
       
   
const riverSearch = <div>
    <a href="/ClackamasUpper">
        <p>Clackamas Upper </p></a>
    <a href="/ClackamasLower">
        <p>Clackamas Lower </p></a>
    <a href="/NorthSantiam">
        <p>North Santiam </p></a>
    <a href="/Deschutes">
        <p>Deschutes</p></a>
    <a href="/Mckenzie">
        <p>Mckenzie </p></a>
    <a href="/JohnDay">
        <p>John Day </p></a>
    <a href="/RougeRiver">
        <p>Rouge River </p></a>
    <a href="/Sandy">
        <p>Sandy </p></a>
    <a href="/WhiteSalmon">
        <p>White Salmon </p></a>
    <a href="/CanyonCreek">
        <p>Canyon Creek </p></a>
    <a href="/Washougal">
        <p>Washougal</p></a>
    <a href="/Klickitat">
        <p>Klikitat </p></a>
    <a href="/Elf">
        <p>ELF</p></a>
    <a href="/Ohanapecosh">
        <p>Ohanapecosh</p></a>
    <a href="/UpperLewis">
        <p>Upper Lewis Falls </p></a>
    <a href="/Molalla">
        <p>Molalla </p></a>
    <a href="/Wilson">
        <p>Wilson</p></a>
    <a href="/JordanCreek">
        <p>Jordan Creek</p></a>
    <a href="/Wind">
        <p>Wind </p></a>
    <a href="/Wynoochee">
        <p>Wynoochee </p></a>
    
    
        
    
    </div>

export default function rivers() {
    return (
        <Layout content={riverSearch} />

    );
};