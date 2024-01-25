import Link from 'next/link'
const CTAsection = () => {
    return (
        <div className='bg-blue-100 p-2'>                                                                                                                                                                                                                                                                                                                                                                                                                 
            <div className='bg-blue-500 my-20 p-5 rounded-lg md:w-4/5 md:mx-auto md:p-10'>
                <div>
                    <h1 className="text-xl font-bold text-center text-blue-100">Ready To Get Started ?</h1>
                    <p className="text-center text-blue-100 my-3">We Stand As Your Trusted Partner. Our Dedication To Quality, <br /> Innovation, And Customer Satisfaction Sets Us Apart.</p>
                </div>
                <div className='md:w-1/2 md:mx-auto'>
                    <Link href='/About'>
                        <div className='hero-btn-2 bg-blue-100 w-full py-3 px-6 rounded-lg '>
                            <p className='text-blue-500 text-center hover:text-blue-500'>Contact Us</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CTAsection;