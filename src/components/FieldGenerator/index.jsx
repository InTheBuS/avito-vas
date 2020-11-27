import React from "react";
import {InputItem} from "../Input";
import {ColorInputItem} from "../CreateBannerWrapper/Banner/BannerForm/Fields/ColorPicker";

const Components = {
    colorPicker: ColorInputItem,
    input: InputItem
};

const component = (component, index, handler) => {
    if (typeof Components[component.component] !== "undefined") {
        return React.createElement(Components[component.component], {
            field: component,
            handler,
            key: component.id,
            index: index
        });
    }
}
export default component