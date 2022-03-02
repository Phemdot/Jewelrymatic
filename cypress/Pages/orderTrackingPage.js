export class OrderTrackingPage {

    OrderTrackingPage_gotoTrackingPage = '#menu-item-381 > a'
    OrderTrackingPage_enterOrdID = '#orderid'
    OrderTrackingPage_enterbillingEmail = '#order_email'
    OrderTrackingPage_clickTrackButton = 'p.form-row:nth-child(5) > button'
    
    navigate(url){
        cy.visit(url)
    }

    gotoTrackingPage(){
        cy.get(this.OrderTrackingPage_gotoTrackingPage).click()
    }

    enterOrderID(orderId){
        cy.get(this.OrderTrackingPage_enterOrdID).type(orderId)
    }

    enterBillingEmail(email){
        cy.get(this.OrderTrackingPage_enterbillingEmail).type(email)
    }

    clickTrackOrder(){
        cy.get(this.OrderTrackingPage_clickTrackButton).click()
    }

    // verifyOrderType(){
    //     cy.get(this.OrderTrackingPage_clickTrackButton).click()
    // }

}