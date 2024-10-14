import {React,useEffect,useState} from 'react'
import './Newcollections.css';
import new_collections from '../../assets/new_collections';
import Item from '../../components/Item/Item';
const Newcollections = () => {
  const [new_collections,setNew_collection]=useState([]);
  const fetchnewlist=async ()=>{
    const response = await fetch('http://localhost:4000/product/newcollections');
    const data = await response.json();
    setNew_collection(data);
  }
  useEffect(()=>{
      fetchnewlist();
  },[])
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="new-collections-item">
        {
            new_collections.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
         }
        </div>

        
    </div>
  )
}

export default Newcollections