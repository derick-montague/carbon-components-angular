import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef
} from "@angular/core";
import { AbstractDropdownView } from "./../AbstractDropdownView.class";
import { SubMenuItem } from "./sub-menu-item.component";

@Component({
	selector: "cdl-dropdown-sub-menu",
	template: `
		<ul class="sub-menu-view"
			[class.open]="isOpen"
			[attr.role]="role"
			[attr.aria-hidden]="(role == 'group') ? !isOpen : null "
			[attr.aria-label]="label" >
			<li *ngFor="let item of items">
				<cdl-sub-menu-item
					[listTpl]="listTpl"
					[listItem]="item"
					[hasSubMenu]="!!item.items"
					[parentRef]="parent"
					[selectedIcon]="selectedIcon"
					[rootElem]="rootElem"
					(select)="onClick($event)">
				</cdl-sub-menu-item>
			</li>
		</ul>
	`,
	providers: [{provide: AbstractDropdownView, useExisting: forwardRef(() => DropdownSubMenu)}]
})
export class DropdownSubMenu implements AbstractDropdownView {
	@Input() items: Array<Object> = [];
	@Input() isOpen = false;
	@Input() parent: any = null;
	@Input() listTpl: string | TemplateRef<any> = "";
	@Input() rootElem: any = null;
	@Input() role: "tree" | "group" = "tree" ;
	@Input() label: string;
	@Input() selectedIcon = true;

	@Output() select: EventEmitter<Object> = new EventEmitter<Object>();

	getNextItem(): Object {
		return;
	}

	getNextElement(): HTMLElement {
		return;
	}

	getPrevItem(): Object {
		return;
	}

	getPrevElement(): HTMLElement {
		return;
	}

	getSelected() {
		return;
	}

	onClick(evt) {
		let item = evt.item;
		if (!item.disabled) {
			if (item.items) {
				item.selected = !item.selected;
			} else {
				this.select.emit({item});
			}
		}
	}
}