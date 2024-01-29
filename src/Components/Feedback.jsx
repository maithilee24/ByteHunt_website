import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Feedback = () => {
    return (
        <div className="mx-10">
            <div className="text-cyan-800 font-semibold text-4xl my-5">Feedback form</div>
            <form>
                <div className="flex flex-col gap-4">
                        <div className="flex gap-10 items-center">
                            <div className="text-xl w-56">Email</div>
                            <TextField id="email" type="email" variant="outlined" fullWidth />
                        </div>
                        <div className="flex gap-10 items-center ">
                            <div className="text-xl w-56">Write your feeback.</div>
                            <TextField
                                id="complaintDetails"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className="flex gap-10 items-center justify-center mt-10 ">
                        <Button type="submit" variant="contained" className='w-56 h-12 ' style={{ backgroundColor:"#043F5D", fontSize:25}}>
                            Submit
                        </Button>
                    </div>
                   
                </div>  
            </form>
        </div>
    );
};

export default Feedback;