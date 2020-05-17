import React from 'react';
declare type AddSize = 'banner' | 'square' | 'learderboard';
interface AddProps {
    size: AddSize;
    addKey?: string;
}
declare const Add: React.FC<AddProps>;
export default Add;
