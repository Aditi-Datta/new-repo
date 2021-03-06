import { Box, Button, TextField } from "@mui/material";

import React, { useEffect, useState } from "react";

const SearchResult = () => {

    const [result, setResult] = useState([]);
    const [serchText, setSearchText] = useState('');

    const handleOnBlur = e => {
        setSearchText(e.target.value);
    }
    console.log(serchText);
    const handleResultSearch = e => {
        // useEffect(() => {
        const url = `https://secure-temple-79203.herokuapp.com/result/${serchText}`;
        fetch(url)
        .then((res) => res.json())
        .then(data => {
            setResult(data)
                // data.map((data)=>({
                //     // id: data._id,
                //     studentId: data.studentId,
                //     result: data.result,
                // }))
                // );        
            console.log(data); 
    });
    // }, [serchText])
        e.preventDefault()
   
    }


    return (
        <>
        <h2>See your Result Here</h2>
    
        <Box container  style={{textAlign: 'center',paddingTop:'5%'}}>


        <TextField 
        style={{margin:18, width:'50vw'}} 
        label="StudentId" 
        color="secondary"
        type='number'
        name='studentId'
        onBlur={handleOnBlur}
        required
        focused />
        <br/>

        {/*<TextField 
        style={{margin:18, width:'50vw'}} 
        label="Semester" 
        color="secondary"
        type='number'
        name='Semester'
        onBlur={handleOnBlur}
        required
    focused />*/}

         <Button variant="contained" onClick={handleResultSearch} type="submit" style={{marginLeft:'40%', marginTop:'2%', padding:'10px 22px'}}>Submit</Button> <br></br>

         <h2>Student Name: {result.studentName}</h2>
         <h2>Student Id: {result.studentId}</h2>
         <h2>Result {result.result}</h2>
        
        
         </Box>


        </>
        );
};
export default SearchResult;