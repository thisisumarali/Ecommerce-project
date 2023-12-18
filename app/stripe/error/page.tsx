import { BanIcon } from 'lucide-react'
import React from 'react'

const ErrorStripe = () => {
    return (
        <div className='h-screen'>
            <div className='mt-32 md:max-w-[50vw] mx-auto '>
                <BanIcon className='text-red-600 w-16 h-16 mx-auto my-6' />
                <div className='text-center'>
                    <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center'>Error!!</h3>
                    <p className='text-gray-600 my-2'>Something went wrong!!! <br /> Please Try Again!!</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorStripe