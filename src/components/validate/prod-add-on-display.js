const Validate = (data = {}) => {
  if (data.qty > 0) {

    if (data.product_type === "configurable") {
      if (
        data.product_option.extension_attributes.configurable_item_options.length > 0
      ) {
        if (
            data.product_option.extension_attributes.configurable_item_options[0]
              .option_value > 0
          ) {   
            if (
              data.product_option.extension_attributes.configurable_item_options[1]
                .option_value > 0
            ) {
                return true;
            }
          }
      }
      

      return "Please! Choose size and Color"
    }
    return true;
  }
  return "Please! Add Qty";
};

export default Validate;
