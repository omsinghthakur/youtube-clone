// export const API_KEY = 'AIzaSyBfMCk2Ap8QZOpc9w0PDQ24uWTR9K8ssx4'
export const API_KEY = 'AIzaSyAKLmYys-xUx4AP8LzeCP7knvSQ3Xq50xc'

export const value_converter = (value) => {
    if(value>1000000){
        // return (value/1000000).toFixed(1) + 'M'
        return Math.floor(value/1000000) + 'M'
    }
    else if(value>1000){
        // return (value/1000).toFixed(1) + 'K'
        return Math.floor(value/1000) + 'K'
    }
    else{
        return value
    }
}