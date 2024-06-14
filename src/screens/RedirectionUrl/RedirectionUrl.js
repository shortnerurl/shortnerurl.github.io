import React from 'react'
import { useParams } from 'react-router-dom';
import { redirectToOriginalUrl } from '../../utils/API/ApICall';
import { STRINGS } from '../../utils/constants';

export const RedirectionUrl = () => {
    const { shortId } = useParams();
    const [message, setMessage] = React.useState("Loading...")

    const fetchRedirectionApi = React.useCallback(async()=> {
        try {
            if(shortId.length > 10) {
                setMessage(STRINGS.invalidShortId);
                return
            };
            const result = await redirectToOriginalUrl(shortId)
            if(!result){
                setMessage(STRINGS.we_are_unable_to_find_shortUrl)
            }
            
        } catch (error) {
            setMessage(STRINGS.we_are_unable_to_find_shortUrl)
        }
    },[shortId])

    React.useEffect(()=>{
        fetchRedirectionApi()
    },[])

    return (
        <div>{message}</div>
    )
}

export default RedirectionUrl
