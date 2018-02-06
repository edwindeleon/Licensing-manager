import React, { Component } from 'react'
	import {SideMenu, Item} from 'react-sidemenu';
	import ReactDOM from 'react-dom';

	export default class SidebarMenu extends Component {
		render () {
  	return(
			<div>
		      <SideMenu renderMenuItemContent={(item) => (<span><strong style={{color: "red"}}>{item.label}</strong></span>)}>
				<Item divider={true} label="Segment 1" value="segment1"/>
			        <Item label="Item 1" icon="fa-search">
			          <Item label="Item 1.1" value="item1.1" icon="fa-snapchat">
			            <Item label="Item 1.1.1" value="item1.1.1" icon="fa-anchor"/>
			            <Item label="Item 1.1.2" value="item1.1.2" icon="fa-bar-chart"/>
			          </Item>
			          <Item label="Item 1.2" value="item1.2"/>
			        </Item>
			        <Item label="Item 2" value="item2" icon="fa-automobile">
			          <Item label="Item 2.1" value="item2.1.1">
			            <Item label="Item 2.1.1" value="item2.1.1"/>
			            <Item label="Item 2.1.2" value="item2.1.2"/>
			          </Item>
			          <Item label="Item 2.2" value="item2.2"/>
			        </Item>
				<Item divider={true} label="Segment 2" value="segment2"/>
				<Item label="Item 3" value="item3" icon="fa-beer"/>
		      </SideMenu>
		</div>
			)
		}
	}

	