/// <reference types="cypress"/>
import {OrderTrackingPage} from "../Pages/orderTrackingPage"

const ordertrackingpage = new OrderTrackingPage()

it('Check Order Status', function(){
    ordertrackingpage.navigate('https://www.jewelrymatic.com/')
    ordertrackingpage.gotoTrackingPage()
    ordertrackingpage.enterOrderID('446')
    ordertrackingpage.enterBillingEmail('phincoalo+benj@gmail.com')
    ordertrackingpage.clickTrackOrder()
    
})