import {cssFramework} from "/src/ase.ui.config.js"

// 取得table
export const genTableContainerCss = (() => {
  return cssFramework==="bulma" ? "table-container" : null
})()

/**
 * 取得Table所需的CSS樣式
 * @param	{Object}	options
 * 	@param	{Boolean}	isBordered		是否有外框
 * 	@param	{Boolean}	isStriped		是否有外框
 * 	@param	{Boolean}	isNarrow			是否有外框
 * 	@param	{Boolean}	isHoverable	是否有外框
 * 	@param	{Boolean}	isFullwidth	是否有外框
 */
export const genTableCss = ({
  isBordered=false,
  isStriped=false,
  isNarrow=false,
  isHoverable=false,
  isFullwidth=false
}) => {
  return cssFramework==="bulma" ? [
    "table",
    isBordered ? "is-bordered" : null,
    isStriped ? "is-striped" : null,
    isNarrow ? "is-narrow" : null,
    isHoverable ? "is-hoverable" : null,
    isFullwidth ? "is-fullwidth" : null,
  ] : null
}

/**
 * 取得Tr所需的CSS樣式
 * @param	{Object}	options
 * 	@param	{Boolean}	isSelected		是否有選中行
 */
export const genTrCss = ({isSelected=false}) => {
	return cssFramework==="bulma" ? [
		isSelected ? "is-selected" : null,
	] : null
}

/**
 * 取得cellDiv使用CSS
 */
export const genCellDivCss = (() => {
	return cssFramework==="bulma" ? "bulma-cell-div" :  null
})()