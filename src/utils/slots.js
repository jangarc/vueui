import {isVNode} from "vue"

// 從Columns中取出
export const GetPropsByColumn = vnode => {
	let result = null;

	if(isVNode(vnode) && vnode.type.name==="Column"){
		result = vnode.props;
	}

	return result;
}

// 從Slots中取出columns設定
export const GetColumnsBySlots = slots => {
	let result = null;

	if(slots.default && typeof slots.default==="function"){
		let cols = {};
		let nodes = slots.default();
		let hasCol = false;

		nodes.forEach(function(node){
			var column = GetPropsByColumn(node);
			if(column){
				cols[column.prop] = column;
				if(hasCol===false) hasCol = true;
			}
		});

		if(hasCol) result = cols;
	}

	return result;
}