describe ("test Cases for the critical flows",() => {

    beforeEach(() => {
        
        cy.visit("https://automationexercise.com/")
       
        })

    it("Login User with correct email and password",()=>{

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').should("be.visible");
        cy.get('[data-qa="login-password"]').should("be.visible");
        cy.get('[data-qa="login-button"]').should("be.visible");
        cy.get('[data-qa="login-email"]').click().type("qatesterikeleusippi@hotmail.com");
        cy.get('[data-qa="login-password"]').click().type("asd123");
        cy.get('[data-qa="login-button"]').click();
        
    })

    it("Register User with existing email",()=>{

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="signup-name"]').should("be.visible");
        cy.get('[data-qa="signup-email"]').should("be.visible");
        cy.get('[data-qa="signup-button"]').should("be.visible");
        cy.get('[data-qa="signup-name"]').click().type("Erik");
        cy.get('[data-qa="signup-email"]').click().type("qatesterikeleusippi@hotmail.com");
        cy.get('[data-qa="signup-button"]').click();
        cy.get('.signup-form > form > p').should("be.visible");
        cy.get('.signup-form > form > p').contains("Email Address already exist!");
        cy.get('.signup-form > form > p').should("contain", "Email Address already exist!");
        
    })

    it("Add Products in Cart",()=>{

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').should("be.visible");
        cy.get('[data-qa="login-password"]').should("be.visible");
        cy.get('[data-qa="login-button"]').should("be.visible");
        cy.get('[data-qa="login-email"]').click().type("qatesterikeleusippi@hotmail.com");
        cy.get('[data-qa="login-password"]').click().type("asd123");
        cy.get('[data-qa="login-button"]').click();
        cy.get(':nth-child(17) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-body > :nth-child(1)').should("be.visible");
        cy.get('u').should("be.visible");
        cy.get('.modal-footer > .btn').should("be.visible");
        cy.get('u').click();
        cy.get('#product-18 > .cart_product > a > .product_image').should("be.visible");
        cy.get('#product-18 > .cart_description > h4 > a').should("be.visible");

    })

    it("Place Order: Register while Checkout",()=>{

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').should("be.visible");
        cy.get('[data-qa="login-password"]').should("be.visible");
        cy.get('[data-qa="login-button"]').should("be.visible");
        cy.get('[data-qa="login-email"]').click().type("qatesterikeleusippi@hotmail.com");
        cy.get('[data-qa="login-password"]').click().type("asd123");
        cy.get('[data-qa="login-button"]').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').should("be.visible").click();
        cy.get('#product-18 > .cart_product > a > .product_image').should("be.visible");
        cy.get('#product-18 > .cart_description > h4 > a').should("be.visible");
        cy.get('.col-sm-6 > .btn').should("be.visible").click();
        cy.get('#address_delivery > .address_title').should("be.visible");
        cy.get('#address_delivery > .address_firstname').should("be.visible");
        cy.get('#address_delivery > .address_firstname').contains("Mr. Erik Eleusippi");
        cy.get('#address_delivery > :nth-child(4)').contains("rivadavia 4200");
        cy.get('#address_delivery > .address_city').contains("Miami florida 1416");
        cy.get('#address_delivery > .address_country_name').contains("United States");
        cy.get('#address_delivery > .address_phone').contains("1157341593");
        cy.get('#address_invoice > .address_title > .page-subheading').should("be.visible");
        cy.get('#address_invoice > .address_firstname').contains("Mr. Erik Eleusippi");
        cy.get('#address_invoice > :nth-child(4)').contains("rivadavia 4200");
         cy.get('#address_invoice > .address_city').contains("Miami florida 1416");
         cy.get('#address_invoice > .address_country_name').contains("United States");
         cy.get('#address_invoice > .address_phone').contains("1157341593");
         cy.get(':nth-child(4) > .heading').should("be.visible");
         cy.get('h4 > a').should("be.visible").contains("Little Girls Mr. Panda Shirt");
         cy.get('.cart_product > a > img').should("be.visible");
         cy.get('.form-control').should("be.visible");
         cy.get(':nth-child(7) > .btn').should("be.visible").click();
         cy.get('.heading').should("be.visible");
         cy.get(':nth-child(2) > .col-sm-12 > .control-label').should("be.visible");
         cy.get('[data-qa="name-on-card"]').should("be.visible").click().type("Erik");
         cy.get(':nth-child(3) > .col-sm-12 > .control-label').should("be.visible");
         cy.get('[data-qa="card-number"]').should("be.visible").click().type("11111111111111111111");
         cy.get('.cvc > .control-label').should("be.visible");
         cy.get('[data-qa="cvc"]').should("be.visible").click().type("123");
         cy.get(':nth-child(2) > .control-label').should("be.visible");
         cy.get('[data-qa="expiry-month"]').should("be.visible").click().type("0224");
         cy.get('[data-qa="expiry-year"]').should("be.visible").click().type("1254");
         cy.get('[data-qa="pay-button"]').should("be.visible").click();
         cy.get('[data-qa="order-placed"] > b').should("be.visible").contains("Order Placed!");
         cy.get('[data-qa="continue-button"]').click();

    })


    it("Remove Products From Cart",()=>{
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').should("be.visible");
        cy.get('[data-qa="login-password"]').should("be.visible");
        cy.get('[data-qa="login-button"]').should("be.visible");
        cy.get('[data-qa="login-email"]').click().type("qatesterikeleusippi@hotmail.com");
        cy.get('[data-qa="login-password"]').click().type("asd123");
        cy.get('[data-qa="login-button"]').click();
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('#product-2 > .cart_delete > .cart_quantity_delete').click();
        cy.wait(1200);
        cy.get('.cart_quantity_delete > .fa').first().click();
        cy.get('.text-center > b').should("be.visible").contains("Cart is empty!");
        cy.get('#empty_cart > .text-center > a > u').click();
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();    

    })

})

// The Rest API script is ready but the endpoint is not working, on the other hand I made the script to show how to display how it would. //

describe ("Test cases for API",() => {
    
    let EmailAccount;
    let passwordAccount;

    it('Register User Account', () => {
      cy.request({
      method: 'POST',
      url: `https://automationexercise.com/api/createAccount`,
      body:{
                "name":"Test",    
                "email":"testrootstrap@test.com",
                "password":"asd123",
                "title":"Mr",
                "birth_date":24,
                "birth_month":"july",
                "birth_year":1991,
                "firstname":"erik",
                "lastname":"eleusippi",
                "company":"Rootstrap",
                "address1":"rivadavia 4201",
                "address2":"",
                "country": "India",
                "zipcode":1416,
                "state":"bangladesh",
                "city": "testt",
                "mobile_number":"15557341593",
          }
    }).then((response) => {
      
        expect(response.status).to.equal(200);
        cy.log("User created!");                     
      });
      
  })

    it('Verify Login with valid details', () => {
      cy.request({
      method: 'POST',
      url: `https://automationexercise.com/api/verifyLogin`,
      body:{
           "email":"testrootstrap@test.com",
           "password": "asd123",
          }
    }).then((response) => {
      
        expect(response.status).to.equal(200);
        cy.log("User exists!");                  
      });
      
  })

    it('user account detail by email', () => {
        cy.request('GET', 'https://automationexercise.com/api/testrootstrap@test.com').as('UserDetail');
        cy.get('@UserDetail').then((UserDetailResponse) => {
          expect(UserDetailResponse.status).to.equal(200);
      
          const NameAccount = UserDetailResponse.body.items.find(item => item.name === 'Test 2.0');
          
          if (NameAccount) {
             EmailAccount = UserDetailResponse.body.email;
             passwordAccount = UserDetailResponse.body.password;
          }
        });
      });
    
    
        
    it('Update User Account', () => {
        cy.request({
        method: 'PUT',
        url: `https://automationexercise.com/api/updateAccount`,
        body:{
            "name":"Test 2.0",    
            "email":EmailAccount,
            "password":passwordAccount,
            "title":"Mr",
            "birth_date":"24",
            "birth_month":"july",
            "birth_year":"1991",
            "firstname":"erik",
            "lastname":"eleusippi",
            "company":"Rootstrap",
            "address1":"rivadavia 4201",
            "address2":"",
            "country": "India",
            "zipcode":"1416",
            "state":"bangladesh",
            "city": "testt",
            "mobile_number":"15557341593",
            }
      }).then((response) => {
        
        expect(response.status).to.equal(200);
        cy.log('User name updated to Test 2.0!!');
        EmailAccount = response.body.email;
          
     });
    })      

    it('Delete User Account', () => {
        cy.request({
        method: 'DELETE',
        url: `https://automationexercise.com/api/deleteAccount`,
        body:{
            "email":EmailAccount,
            "password":passwordAccount,
            }
      }).then((response) => {
        
          expect(response.status).to.equal(200);
          cy.log('Account deleted!');

        });
      })    
    })