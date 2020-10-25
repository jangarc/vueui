import DataGrid from './components/datagrid'
import Column from './components/datagrid/column'
import {Container, Section} from "./components/layout"

export default {
	setup() {
		const columns = {
			name: {text: "姓名"},
			tel: {text: "電話"},
		};

		const data = [
			{name:"Arc", tel: "07-7654321"},
			{name:"Apple", tel: "07-1234567"},
		];

		const gridOpt = {
			//columns,
			data,
			isFullwidth: true,
			isBordered: true,
			style: "width: 400px",
		}

		const grid2Opt = {
			columns, data,
			isFullwidth: true,
			//isBordered: true,
		}

		return () => <Container>
			<Section><DataGrid {...gridOpt}>
				<Column prop="name" textAlign="left" style="font-size:16px;" width="100" text="姓名"></Column>
				<Column prop="tel" textAlign="center" width="180" text="電話"></Column>
			</DataGrid></Section>
			<Section><DataGrid {...grid2Opt}></DataGrid></Section>
		</Container>;
	}
}