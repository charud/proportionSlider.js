var LC = LC || {};

LC.ProportionSlider = function(options)
{
	var me = {};
	var _items = [];
	var _element;
	var _maxValue;

	me.init = function()
	{
		_element = options.element;
		_maxValue = options.maxValue || 100;
	};

	me.addItem = function(item)
	{
		_items.push(item);
		me.invalidateLayout();
	};

	me.invalidateLayout = function()
	{
		for(var i in _items)
		{
			var item = _items[i];

			// Does an element for this item not already exist, then create
			// and append a new element for this item
			if(!item.element)
			{
				var elmItem = document.createElement("div");
				elmItem.className = "item";
				elmItem.innerHTML = item.content;
				_element.appendChild(elmItem);
				item.element = elmItem;
			}

			// Update element percentage
			var itemPercentage = item.value / _maxValue;
			item.element.style.width = itemPercentage * _element.offsetWidth - 1 /*border*/
		}

	};

	me.init();
	return me;
};