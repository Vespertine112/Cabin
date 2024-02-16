/**
 * A Force Request Disregards SSL Certs validity
 */
interface ForceRequest extends RequestInit {
    rejectUnauthorized?: boolean;
}
/**
 * Init Variable for ForceRequests  
 */
export const ForceRequestInit: ForceRequest = {
    method: 'GET',
    rejectUnauthorized: false,
};