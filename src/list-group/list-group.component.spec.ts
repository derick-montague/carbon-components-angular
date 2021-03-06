import { Component } from "@angular/core";
import { TestBed, ComponentFixture, inject } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { ListGroup } from "./list-group.component";

describe("List Group", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({declarations: [ListGroup]});
	});

	it("should work", () => {
		const fixture = TestBed.createComponent(ListGroup);
		expect(fixture.componentInstance instanceof ListGroup).toBe(true);
	});

	it("should render a list", () => {
		const fixture = TestBed.createComponent(ListGroup);
		fixture.componentInstance.items = [
			{
				content: "item one",
				selected: false
			},
			{
				content: "item two",
				selected: false
			},
			{
				content: "item three",
				selected: false
			},
			{
				content: "item four",
				selected: false
			}
		];
		let elem = fixture.debugElement.query(By.css("ul"));
		fixture.detectChanges();
		expect(elem.children.length).toEqual(4);
	});

	it("should emit a select event", () => {
		const fixture = TestBed.createComponent(ListGroup);
		fixture.componentInstance.items = [
			{
				content: "item one",
				selected: false
			},
			{
				content: "item two",
				selected: false
			},
			{
				content: "item three",
				selected: false
			},
			{
				content: "item four",
				selected: false
			}
		];
		fixture.detectChanges();
		spyOn(fixture.componentInstance.selected, "emit");
		let li = fixture.nativeElement.querySelector("li");
		li.click();
		fixture.detectChanges();
		expect(fixture.componentInstance.selected.emit).toHaveBeenCalled();
	});

});
