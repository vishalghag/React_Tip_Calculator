export const Output = ({people}) =>{

    
    let result = people.map((item,i)=>(
            
            <div key={i} style={{dispay:'flex'}} >
           <li> {item.names}  offering Tip of {item.cusvalue} </li>
           </div>
        ))
    

    return(
        <>
        <hr></hr>
        <div style={{display:"flex",justifyContent:"center"}}>
        <h3>Customer List</h3>
        </div>
        <hr></hr>
        <div>
        {result}
        {/* { `  ${customer.names} offering a Tip of ${customer.cusvalue}` }  */}
        </div>
        </>
    )
}