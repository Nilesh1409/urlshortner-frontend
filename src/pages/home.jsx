import React,{useState} from "react";
import { Input,Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'



const Home = () => {
    // create home which take url in input return short url

    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.parse(localStorage.getItem('token')))
        
        fetch('http://localhost:8080/url',{
            method: 'POST',
            body: JSON.stringify({"url" : url}),
            // pass token in header from localstorage
            headers: {
                'Content-Type': 'application/json',
                'token': JSON.parse(localStorage.getItem('token')).token}
            },
        ).then(res => res.json())
        .then(data => {
            console.log(data);
            setShortUrl(data.shortUrl);
        }).catch(err => console.log(err));
    }
    return (
        <>
        <Input placeholder='Enter url' value={url} onChange={(e)=> setUrl(e.target.value)} />
        <Button onClick={handleSubmit}>Submit</Button>
        <Box bg='black' w='100%' p={4} color='white'>


        <h1>SHORT URL : {shortUrl}</h1>
        </Box>
        </>
    )

}

export default Home;