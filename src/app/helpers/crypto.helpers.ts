import * as CryptoJS from "crypto-js";

const secretKey='9a2dfc1b-0476-42a0-8f7b-0979382043a8';


export function encrypt(data:string):string{
    return CryptoJS.AES.encrypt(data,secretKey).toString();
}

export function decrypt(data:string):string{
    return CryptoJS.AES.decrypt(data,secretKey).toString(CryptoJS.enc.Utf8);
}