import { useState } from "react"
import { Footer } from "../Footer/Footer"
import { Input } from "../Input/Input"
import { Output } from "../Output/Output"
import style from "./Tip.module.css"

export const Tip = () =>{
    // const percentage = 10;
    const [customer,SetCustomer] = useState({
        id:1,
        amount:'',
        cusvalue:'',
        type:'',
        names:''
    })

    const [total,setTotal] = useState(0);

    const [people,setpeople] = useState([])

    const getValue = (service) =>{
        
        switch (service) {
            case 'Excellent':
                // service =  10
                return 15;
            break;

            case 'Good':
                return 10;
                break;

                case 'Fair':
                    return 5;
                    break;
        
            default:
                break;
        }
    }

    const inputHandler = (event) =>{
      SetCustomer({...customer,[event.target.name]:event.target.value})
      console.log("cus",customer);
    }

   

    const addHandler = () =>{
        const finalTip = parseInt(customer.amount)/getValue(customer.type);
        // SetCustomer({...customer,cusvalue:finalTip})
        console.log("final",finalTip);
        customer.cusvalue = finalTip;
        setTotal(total + finalTip);
        setpeople([...people,customer])
        // setpeople('')
        SetCustomer('')
    }

    return(
        <>
        <h3 className={style.header}>Tip Calculator</h3>
        <div>
            <Input
                inputHandler={inputHandler}
                values={people}
                addHandler={addHandler}
                customer={customer}
            />
        </div>
        <div>
            <Output
                people={people}
            />
        </div>
        <div>
            <Footer
                addHandler={addHandler}
                total={total}
                people={people}
            />
        </div>
        </>
    )
}

