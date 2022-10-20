import React from 'react'
import DYIdata from './DYIdata'

function DYI() {
    const [data, setData] = React.useState({fullname:"", email:"",phone:"",message:""})
    const [dataArray, setDataArray] = React.useState([])
    const [formState, setFormState] = React.useState(false)
    
    const handleChange = (e) =>{
        const {name, value} = e.target
        setData(prevData =>({
            ...prevData, [name]:value
        }))
    }

    const handleClick = () =>{
        setDataArray([...dataArray, data])
        setData({fullname:"", email:"", phone:"", message:""})
        setFormState(!formState)
        if(data.message.length < 10)
        {
            alert("Message is too short :)")
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return (
    <div className='DYI-container'>
        <h4>Discuss Your Ideas</h4>
        <span className='DYI-detail'>Our Team will be in touch with you within one bussiness day</span>        
        <form onSubmit={handleSubmit}>
            {formState ? 
            dataArray.map((item,index)=>{
                return <DYIdata fname = {item.fullname}
                                email = {item.email}
                                phone={item.phone}
                                msg = {item.msg}/>
            })
            : <><input className='DYI-input' type="text" name="fullname" placeholder='Full Name' required onChange={handleChange} value={data.fullname}></input>
            <input className='DYI-input' type="email" name="email" placeholder='Email Id' required onChange={handleChange} value={data.email}></input>
            <input className='DYI-input' type="number" name="phone" placeholder="Phone Number" required onChange={handleChange} value={data.phone}></input>
            <textarea name='message' placeholder='YOUR MESSAGE' required onChange={handleChange} value={data.message}></textarea>
            <button className='DYI-btn' onClick={handleClick}>SEND</button></>}                    
        </form>
    </div>
  )
}

export default DYI