<template>
  <div style="">

  </div>
  <Section>
    <Title>Default</Title>
    <DataGrid
      ref="grid"
      :isFullwidth="isFullwidth"
      :isBordered="!isBordered"
      style="width: 400px"
    >
      <Tr>
        <Column v-for="(column, key) in state.columns" v-bind="column" :isHead="true">{{column.text}}</Column>
      </Tr>
      <Tr v-for="item in state.data">
        <Column v-for="(column, key) in state.columns" v-bind="column">{{item[key]}}</Column>
      </Tr>
    </DataGrid>
    <Title :level="2">Use Default Slot set column</Title>
    <DataGrid
      ref="grid"
      :data="state.data"
      :isFullwidth="isFullwidth"
      :isBordered="isBordered"
      style="width: 600px"
    >
      <Column prop="name" textAlign="left" style="font-size:16px;" width="100" text="姓名"></Column>
      <Column prop="tel" textAlign="center" width="180" text="電話"></Column>
    </DataGrid>
    <Title>set columns</Title>
    <DataGrid
      ref="grid2"
      :columns="state.columns"
      :data="state.data"
      :isFullwidth="isFullwidth"
      :isBordered="!isBordered"
      :props="grid2Opt"
    >
    </DataGrid>
  </Section>
</template>

<script>
import { reactive, ref } from "vue"
import DataGrid from './components/datagrid'
import Column from './components/datagrid/column'
import {Tr} from './components/table'
import Title from "./components/element/title.jsx"
import {Container, Section} from "./components/layout"

export default {
  name: 'App',
  components: {
    Title,
    DataGrid, Column, Tr,
    Container, Section
  },
  setup() {
    const state = reactive({
      columns: {
        name: {text: "姓名"},
        tel: {text: "電話"},
      },
      data: [
        {name:"Arc", tel: "07-7654321"},
        {name:"Apple", tel: "07-1234567"},
      ],
    });

    const isFullwidth = ref(true);
    const isBordered = ref(true);

    setTimeout(()=> {
      isBordered.value = false;
      state.columns.name.text = "Name"
      state.columns.tel.text = "Tel"
    }, 2000)

		return { state, isFullwidth, isBordered};
  },
  mounted(){

  }
}
</script>
