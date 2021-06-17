import React from 'react';

interface PageProps {
    title?: string;
    ComponentItem?: JSX.Element;
}

export default ({ title, ComponentItem }: PageProps) => {
    return (
        <div className="main-container-row-item">
            <div className="main-container-row-item-title">
                {title}
            </div>
            <div>
                {ComponentItem}
            </div>
        </div>
    )
}