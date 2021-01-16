import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Rohan123',
        email: 'admin@bookshop.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Usama',
        email: 'usama@bookshop.com',
        password: bcrypt.hashSync('123456',10)
    },
    {
        name: 'Osama',
        email: 'osama@bookshop.com',
        password: bcrypt.hashSync('123456',10)
    }
]

export default users