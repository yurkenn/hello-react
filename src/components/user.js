import PropTypes from 'prop-types';
function User({ name, surname, isLoggedIn, age, friends, address }) {
    if (!isLoggedIn) {
        return <div>Giris yapmadiniz</div>
    }
    return (
        <div>
            <h1>
                {
                    `${name} ${surname} ${age}`
                }
            </h1>
            {address.title} {address.zip}
            <br />
            <br />

            {
                friends.map((friend, index) => <div key={index}>{index}-{friend}</div>)
            }

        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

//atamasi yapilmamis problara atama yapabilirz eger bir deger atanmis ise defaultProps dikkate alinmaz.
User.defaultProps = {
    name: 'isimsiz',
    isLoggedIn: true,
};

export default User;