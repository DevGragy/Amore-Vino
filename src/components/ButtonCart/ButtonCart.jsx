import { Component } from 'react'

const styles = {
    button: {
        borderRadius: '4px',
        backgroundColor: '#DBBC57',
        padding: '10px 20px',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    }
}

class ButtonCart extends Component {
    render() {
        return (
            <>
                <button style={styles.button} {...this.props} />
            </>
        )
    }
}

export default ButtonCart
