import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

let data=[]








const Complaint = () => {

    const [name,setName]=useState("")
    const [title,setTitle]=useState("")
    const [details,setDetails]=useState("")


   
    let handleDetails=(e)=>{
            setDetails(e.target.value);
    }
    let handleTitle=(e)=>{
            setTitle(e.target.value);
           
    }
    let handleName=(e)=>{
            setName(e.target.value);
            
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        data.push({
            details:{details},
            title:{title},
            name:{name}
        })
        console.log(data)
        setDetails("")
        setTitle("")
        setName("")

    }
    return (
        <div className="mx-10">
            <div className="text-cyan-800 text-4xl my-5 font-semibold">Complaint Form</div>
            <form onSubmit={handleSubmit} >
                <div className="flex flex-col gap-4">
                    <div className="flex gap-10 items-center">
                        <div className="text-xl w-56">Name</div>
                        <TextField id="name" type="text" variant="outlined" fullWidth onChange={handleName}/>
                    </div>

          
                    
                        <div className="flex gap-10 items-center">
                            <div className="text-xl w-56">Email</div>
                            <TextField id="email" type="text" variant="outlined" fullWidth />
                        </div>
                        <div className="flex gap-10 items-center">
                            <div className="text-xl w-56 ">Title</div>
                            <TextField id="email" type="text" variant="outlined" fullWidth  className='' onChange={handleTitle}/>
                        </div>

     
      
                        <div className="flex gap-10 items-center ">
                            <div className="text-xl w-56">Complaint Details</div>
                            <TextField onChange={handleDetails}
                                id="complaintDetails"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className="flex gap-10 items-center justify-center mt-10  ">
                        <Button type="submit" variant="contained"  className='w-56 h-12' style={{ backgroundColor:"#043F5D",  }} 
                            
                        >
                            Submit
                        </Button>
                    </div>
                   
                </div>


                   
               
            </form>
        </div>
    );
};
export {data};
export default Complaint;
