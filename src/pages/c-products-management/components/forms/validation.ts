export const addProductRules ={
    productName: [
      { required: true, message: "نام کالا الزامی است" },
      { min: 4, message: "نام کالا  باید حداقل ۴ حرفی باشد" },
    ],
    category: [
      { required: true, message: " انتخاب دسته بندی الزامی است" },
      
    ],
    images: [
        { required: true, message: "آپلود حداقل یک تصویر الزامی است" },
        
    ],
    price: [
        { required: true, message: " قیمت الزامی است" },
        { pattern:new RegExp('^[0-9]+$'), message: "قیمت میبایست فقط شامل اعداد باشد" }
        
    ],
    quantity: [
        { required: true, message: "موجودی محصول الزامی است" },
        { pattern: new RegExp('^[0-9]+$'), message: "موجودی میبایست فقط شامل اعداد باشد" }
        
    ],
    description: [
        { required: true, message: "وارد کردن توضیحات الزامی است" },
       
        
    ],
  }