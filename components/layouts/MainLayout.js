import React from 'react'

function MainLayout(props) {
    return (
        <div>
            <Text>Main Layout</Text>
            { props.children }
        </div>
    )
}

export default MainLayout
