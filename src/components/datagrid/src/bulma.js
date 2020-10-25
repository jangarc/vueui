/**
 * [注意] 該函式僅供Bulma樣式使用
 */

export const genTableContainerCss = () => {
  return [
    "table-container"
  ]
};

/**
 * 取得Table所需的CSS樣式
 * @param	{Object}	options
 * 	@param	{Boolean}	isBordered		是否有外框
 * 	@param	{Boolean}	isStriped		是否有外框
 * 	@param	{Boolean}	isNarrow			是否有外框
 * 	@param	{Boolean}	isHoverable	是否有外框
 * 	@param	{Boolean}	isFullwidth	是否有外框
 */
export const genTableCss = ({isBordered=false, isStriped=false, isNarrow=false, isHoverable=false, isFullwidth=false}) => {
  return [
    "table",
    isBordered ? "is-bordered" : null,
    isStriped ? "is-striped" : null,
    isNarrow ? "is-narrow" : null,
    isHoverable ? "is-hoverable" : null,
    isFullwidth ? "is-fullwidth" : null,
  ]
};

/**
 * 取得Tr所需的CSS樣式
 * @param	{Object}	options
 * 	@param	{Boolean}	isSelected		是否有選中行
 */
export const genTrCss = ({isSelected=false}) => {
	return [
		isSelected ? "is-selected" : null,
	]
}

export const genCellDivCss = () => {
	return [
		"cellDiv"
	]
}