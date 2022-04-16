export const Input = ({inputHandler, addHandler,customer}) =>{

    return(
        <>
            <div style={{display:"flex",justifyContent:"center"}}>
            <h4>Enter the bill amount</h4>
            <br/>
            </div>

            <div style={{display:"flex",justifyContent:"center"}}>
            <input style={{width:"600px"}} type="number"  onChange={inputHandler} name='amount'/>
            </div>
            <hr style={{marginTop:"100px"}}/>
            <div style={{display:"flex",justifyContent:"center"}} >
                <h4>How was the Service:</h4>
                <select name='type' onChange={inputHandler}>
                <option  >Select Service</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                </select>
                <input style={{width:"300px", marginLeft:"10px"}} type="text" name='names' onChange={inputHandler}/>
                <button style={{backgroundColor:"aqua",marginLeft:"10px", color:"whitesmoke",}} onClick={addHandler}>Add Customer</button>
            </div>
        </>
    )
}