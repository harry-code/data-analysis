import React from 'react';
import './index.less';
interface pageProps {
    data: Array<{ content: string }> | undefined;
}

export default ({ data }: pageProps) => {
    return (
        <div className="carousel">
            <div className="carousel-content">
                {
                    data?.map((ite) => <div>{ite.content}</div>)
                }
            </div>
        </div>
    )
}