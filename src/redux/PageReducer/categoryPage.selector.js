import { createSelector } from "reselect";
import RootCategories from "../../attributes/rootCategories/RootCategories.atttributes";
const selectPage = (state) => state.page;

export const selectPageId = createSelector([selectPage], (page) => page.cat_id);

const getId = (_,id) =>RootCategories[id] ;

export const selectIdFromAttr = createSelector([selectPage,getId], (page,AttrCatID) => AttrCatID);
