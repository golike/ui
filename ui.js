'use strict';
	
var ui = {};

(function() {
	var e = document.getElementsByTagName('input');
		
	for (var i = 0; i < e.length; i++) {
		switch (e[i].type) {
		
			case 'radio':
				var radioElements = [];
				
				for (var j = 0; j < e.length; j++) {
					if (e[j].type === 'radio' && e[j].name === e[i].name) {
						radioElements.push(e[j]);
					}
				}
	
				if (ui[e[i].name] === undefined) {
					ui[e[i].name] = {
						elements: radioElements,
						type: 'radio',
						value: function(val) {
							if (val !== undefined) {
								for (var i = 0; i < this.elements.length; i++) {
									if (this.elements[i].value === val.toString()) {
										this.elements[i].checked = true;
										return this.elements[i].value;
									}
								}
							} else {
								var value = null;
								for (var i = 0; i < this.elements.length; i++) {
									if (this.elements[i].checked) {
										return this.elements[i].value;
										break;
									}
								}
							}
						}
					};
				}
				break;

			case 'text':
				if (ui[e[i].id] === undefined) {
					ui[e[i].id] = {
						element: e[i],
						type: 'text',
						value: function(val) {
							if (val !== undefined) {
								this.element.value = val;
								return this.element.value;
							} else {
								return this.element.value;
							}
						}
					};
				}
				break;
			
			case 'range':
				if (ui[e[i].id] === undefined) {
					ui[e[i].id] = {
						element: e[i],
						type: 'range',
						value: function(val) {
							if (val !== undefined) {
								this.element.value = val;
								return this.element.value;
							} else {
								return this.element.value;
							}
							
						}
					};
				}
				break;
		}
	}
	
	e = document.getElementsByTagName('select');
	for (var i = 0; i < e.length; i++) {
		
		if (ui[e[i].id] === undefined) {
			ui[e[i].id] = {
				element: e[i],
				type: 'select',
				value: function(val) {
					if (val !== undefined) {
						val = val.toString();
						for (var j = 0; j < this.element.options.length; j++) {
							if (this.element.options[j].value === val) {
								this.element.selectedIndex = j;
								return this.element.options[j].value;
							}
						}
					} else {
						return this.element.options[this.element.selectedIndex].value;
					}
				}
			};
		}
	}
	
	e = document.getElementsByTagName('textarea');
})();