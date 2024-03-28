export interface Product{
    id:String,
    product_name:String,
    product_image:String,
    is_highlighted:boolean,
    description:String
    front_page:boolean,
    param:String,
    price:number

}

export interface CartItem extends Product{
    amount:number
}
