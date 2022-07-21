module.exports = (connection, DataTypes) => {
    const User = connection.define("users",
        {
            name: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                isEmail: true,
                default: "test@gmail.com"
            },
            gender: {
                type: DataTypes.STRING,
                isIn: [['male', 'female']],
                default: "male"
            }
        }, {
            
        createdAt: false,
        updatedAt: false
    },
    
    )
    return User
}

// {
      // timesstemps:false
        // updatedAt:false
        // createdAt:false
        // createdAt:"create_at",
        // updatedAt:"update_at"
        // tableName:'userdata',
        // timestamps:false
        // createdAt:false,
        // updatedAt:false
// }