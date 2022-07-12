import React, { useState } from 'react'
import Faq from '../Faq/Faq';
import faqImg from '../../../images/ss5.jpg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from "@mui/material";
// import { height } from '@mui/system';

function FaqQuestions() {

    const [faqs, setfaqs] = useState([
        {
            question: "	Do you have the Government approval?",
            answer: 'Yes. Leading Light School & College is approved by the Government of Bangladesh on September 2020.',
            open: true
        },
        {
            question: "What is the full name of the College?",
            answer: 'Leading Light School & College',
            open: false
        },
        {
            question: "College Address?",
            answer: 'TB Gate, Tultikor, Sylhet, Bangladesh.',
            open: false
        },
        {
            question: "	Contact Number?",
            answer: '+88 01720 532169, 01766 857322',
            open: false
        },
        {
            question: "	E-mail Address?",
            answer: 'info@leadinglight.edu.bd',
            open: false
        },
        {
            question: "	Website Address?",
            answer: 'http://www.leadinglight.edu/',
            open: false
        }
    ]);
    const headderStyle = {
        padding: '25px',
        backgroundColor: ' #33c8bd',
        display: 'flex',
        justifyContent: 'center'

    };
    const imgStyle = {
        // width: '200px',
        width: '40%',
        // margin: '3% auto',
        height: '200px',
        position: 'related',
        marginTop: '20px',
        marginBottom: '2%'
    };
    const faqsStyle = {
        display: 'flex',
        width: '100%'

    };
    const faqQuestionStyle = {
        marginTop: '0'
    };
    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            }
            else {
                faq.open = false;
            }

            return faq;
        }))
    }

    return (
        <div >
            <Container>
                <Box style={faqsStyle}>
                    <Grid container rowSpacing={1} spacing={0} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid item xs={12} sm={12} md={6} style={imgStyle}>
                            <img src={faqImg}></img>
                        </Grid>
                        <Grid className='faqs' item xs={12} sm={12} md={6} style={faqQuestionStyle}>
                            <h1 className='htag' style={headderStyle}>Frequently Asked Questions</h1>
                            {
                                faqs.map((faq, i) => (
                                    <Faq faq={faq} index={i} toggleFAQ={toggleFAQ}></Faq>
                                ))
                            }
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </div>





        // <div className='faqs' style={faqsStyle}>
        //     <div>
        //         <img src={faqImg}></img>
        //     </div>
        //     <div>
        //         <h1 style={headderStyle}>FAQs</h1>
        //         {
        //             faqs.map((faq, i) => (
        //                 <Faq faq={faq} index={i}></Faq>
        //             ))
        //         }
        //     </div>

        // </div >
    )
}

export default FaqQuestions