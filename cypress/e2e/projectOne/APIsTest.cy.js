describe('create user', () => {

    it('create new user', () => {
        const token = "c87bddc9db572e99c0d6f37f4697acc2cf7e76559e6d655566c25f12e4cadcea"

        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'Authorization' : 'Bearer ' + token
            },
            body : {
                name : "prakasa",
                gender : "male",
                email : "jobprakasa20@gmail.com",
                status : "active"
            }
        }).then((response) => {
            expect(response.status).eq(201)
            expect(response.body).to.have.property('name','prakasa')
            expect(response.body).to.have.property('gender', 'male')
            expect(response.body).to.have.property('email', 'jobprakasa20@gmail.com')
            expect(response.body).to.have.property('status', 'active')
        })
    })

})