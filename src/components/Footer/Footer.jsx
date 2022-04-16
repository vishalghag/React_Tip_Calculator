export const Footer = ({addHandler,total, people}) =>{

    return(
        <>
        <hr/>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button style={{backgroundColor:"aqua",color:"whitesmoke",}} onClick={addHandler}>Calculate Tip & Customer</button>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
                <table>
                    <thead>
                        <tr>
                            <th>Number of Customer</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{people.length}</td>
                            <td>{total}</td>
                        </tr>
                        </tbody>
                </table>
        </div>
        <div style={{backgroundColor:"purple", color:"whitesmoke", display:'flex', justifyContent:'center'}}>
           @2022 Tip Calculator
        </div>
        </>
    )
}