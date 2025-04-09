/*! Copyright 2024 Adobe
All Rights Reserved. */
const e=``,t=``,a=`
  fragment CHECKOUT_DATA_FRAGMENT on Cart {
    id
    is_virtual
    email
    total_quantity
    available_payment_methods {
      code
      title
    }
    selected_payment_method {
      code
      title
    }
  }

  ${e}
  ${t}
`,i=`
  fragment CUSTOMER_FRAGMENT on Customer {
    firstname
    lastname
    email
  }
`;export{a as CHECKOUT_DATA_FRAGMENT,i as CUSTOMER_FRAGMENT};
