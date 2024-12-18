using { GWSAMPLE } from './external/GWSAMPLE' ;

service ProductDetail {

entity ProductSet as select from GWSAMPLE.ProductSet {

    ProductID,
    Description,
    Name,   
    Price
}
}