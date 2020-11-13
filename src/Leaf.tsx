import React from 'react';

type LeafProps = { attributes: any, leaf: { bold: boolean} };

const Leaf: React.FC<LeafProps> = props => {
    return (
        <span {...props.attributes}
        style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}>
            {props.children}
        </span>
    )
}

export default Leaf;