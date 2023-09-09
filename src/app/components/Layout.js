import React from 'react';

function Layout ({ children }){
    return(
        <html lang='en'>
            <body className={`font-sans bg-gray-100 pt-[2%]`}>
                <div className='min-h-screen items-center justify-center'>
                    {children}
                </div>
            </body>
        </html>
    );
}

export default Layout;