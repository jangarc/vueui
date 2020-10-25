import {TableContainer, Table, Tr, Td} from "../table"
import Column from "./column"
import { ref } from "vue"
import { GetColumnsBySlots} from "/src/utils/slots.js"

export default {
  name: "DataGrid",
	props: {
		emptyText: {type: String, default: "No Any Data!"},
		isBordered: {type: Boolean, default: false},
		isStriped: {type: Boolean, default: false},
		isNarrow: {type: Boolean, default: false},
		isHoverable: {type: Boolean, default: false},
		isFullwidth: {type: Boolean, default: true},
		columns: {type: Object},
		data: {type: Array, default: () => []},
	},
	setup(props, {attrs, slots}) {

		let columns = ref({});
		let data = ref(props.data);

		// 如果沒有指定columns時檢查slots.default是否有指定
		if(props.columns==null)
			columns.value = GetColumnsBySlots(slots);
		else
			columns.value = props.columns;

		// 是否允許Render
		let allowRender = columns.value!=null && Object.keys(columns.value).length > 0 && data.value.length > 0;

		return () => <TableContainer>
			<Table
				isBordered={props.isBordered}
				isStriped={props.isStriped}
				isNarrow={props.isNarrow}
				isHoverable={props.isHoverable}
				isFullwidth={props.isFullwidth}
			>
				{
					// 允許Render時
					!allowRender ?
						// 如果沒有設定column時
						slots.default ? slots.default() :
							columns.value==null ?
								<Tr><Td isHead={true} style="text-align: center;">Not Set Column!</Td></Tr> :
								<Tr><Td style="height: 150px;text-align: center;">{props.emptyText}</Td></Tr>
						// 正常情況時
						: [
							<Tr>
								{
									Object.keys(columns.value).map(key => {
										let column = columns.value[key];
										return <Column {...column} isHead={true}>{column.text}</Column>
									})
								}
							</Tr>,
							[...data.value.map(item => {
								return <Tr>
									{
										Object.keys(columns.value).map(key => {
											let column = columns.value[key];
											return <Column {...column}>{ item[key] }</Column>
										})
									}
								</Tr>
							})]
						]
				}
			</Table>
		</TableContainer>
	},
}